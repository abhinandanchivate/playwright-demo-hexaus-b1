import { test, expect } from '@playwright/test';
const config = require('config')

test.describe('Search Box Functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(config.baseUrl);
  });

  test('should render search box on homepage', async ({ page }) => {
    const searchBox = page.locator('input[name="search"]').first();
    const searchButton = page.locator('button[type="submit"]:has-text("Search")').first();

    await expect(searchBox).toBeVisible();
    await expect(searchButton).toBeVisible();
  });

 
test('Search Box Functionality - should return results for valid keyword', async ({ page }) => {
  const baseUrl = config.get('baseUrl');
  await page.goto(baseUrl);

  // Locate search box and search button
  const searchBox = page.locator('input[name="search"]').first();
  const searchButton = page.locator('button[type="submit"]:has-text("Search")');

  // Fill and click search
  await searchBox.fill('macbook');
  await searchButton.click();

  // Wait for results to load
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/search=macbook/i);

  // Locate and assert product cards
  const results = page.locator('.product-thumb');
  const count = await results.count();
  console.log('Products found:', count); 
  await page.screenshot({ path: 'search-results.png', fullPage: true });

  expect(count).toBeGreaterThan(0); //  ensure at least one result 

  // Optional: check first result has the expected product name
  await expect(results.first().locator('h4')).toContainText(/macbook/i);
});
  test('should return no results for gibberish keyword', async ({ page }) => {
   const baseUrl = config.get('baseUrl');
  await page.goto(baseUrl);

  const searchBox = page.locator('input[name="search"]').first();
  const searchButton = page.locator('button[type="submit"]:has-text("Search")');

  await searchBox.fill('asdlkfjasdf'); // gibberish input
  await searchButton.click();

  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/search=asdlkfjasdf/i);
//<p>There is no product that matches the search criteria.</p>
  const noResultText = page.locator('p', { hasText: 'There is no product that matches the search criteria.' });
  //await noResultText.waitFor({ state: 'visible' , timeout: 10000 });
  await expect(noResultText).toBeVisible();
  await expect(noResultText).toContainText('There is no product that matches the search criteria.');
  });

  // test('should return no results for empty search', async ({ page }) => {
  //   await page.fill('input[name="search"]', '');
  //   await page.click('input[name="search"]');

  //   await expect(page).toHaveURL(/search=$/);
  //   await expect(page.locator('p')).toContainText('There is no product that matches the search criteria.');
  // });


test('should return no results for empty search', async ({ page }) => {
  const baseUrl = config.get('baseUrl');
  await page.goto(baseUrl);

  const searchBox = page.locator('input[name="search"]').first();
  const searchButton = page.locator('button[type="submit"]:has-text("Search")');

  await searchBox.fill('');
  await searchButton.click();

  await page.waitForLoadState('networkidle');

  const noResult = page.locator('p');
  //await noResult.waitFor({ state: 'visible', timeout: 5000 });

  // its not giving any message on screen
  await expect(noResult).toBeVisible();
  const text = await noResult.textContent();
  console.log('📋 Message:', text?.trim());

  expect(text).toMatch(/no product that matches/i);
});

  test('search suggestions (if present) appear while typing', async ({ page }) => {
    const input = page.locator('input[name="search"]');
    await input.fill('Mac');
    // Adjust timeout based on debounce behavior if needed
    await page.waitForTimeout(1000);

    const dropdown = page.locator('.dropdown-menu li a');
    if (await dropdown.first().isVisible()) {
      await expect(dropdown.first()).toContainText(/Mac/i);
    } else {
      console.log('Autocomplete not implemented or not visible');
    }
  });

});
