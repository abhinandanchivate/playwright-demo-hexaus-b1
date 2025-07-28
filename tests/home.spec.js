const { test, expect } = require("@playwright/test");

test.describe("Home Page Tests", () => {
  test("page title is correct", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io");
    // Check if the title contains "Home"
    await expect(page).toHaveTitle(/Your Store/);
  });

  // logo
  test("logo is visible", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io");
    // Check if the logo is visible
    const logo = page.locator('img[alt="Poco Electro"]');
    await expect(logo).toBeVisible();
  });
});

test.describe("Search Section UI checks", () => {
  test("search bar is visible", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io");
    // Check if the search bar is visible
    const searchBar = page.locator('input[name="search"]').first();
    await expect(searchBar).toBeVisible();
    await expect(searchBar).toHaveAttribute(
      "placeholder",
      "Search For Products"
    );
  });
  test("Only visible search input should be checked", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io");

    const searchInputs = page.locator('input[name="search"]');
    const visibleInput = searchInputs
      .filter({
        has: page.locator('xpath=ancestor::*[contains(@id, "search")]'),
      })
      .first();

    await expect(visibleInput).toBeVisible();
    await expect(visibleInput).toHaveAttribute(
      "placeholder",
      "Search For Products"
    );
  });
});
