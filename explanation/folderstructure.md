# 📁 Folder Structure (Complete)

```
ecommerce-playwright-tests/
│
├── tests/
│   ├── homepage/
│   │   └── homepage.spec.js
│   ├── shop/
│   │   ├── search.spec.js
│   │   ├── productListing.spec.js
│   │   ├── productDetails.spec.js
│   │   ├── cart.spec.js
│   │   ├── checkout.spec.js
│   │   ├── compare.spec.js
│   ├── account/
│   │   ├── login.spec.js
│   │   ├── register.spec.js
│   │   ├── logout.spec.js
│   │   ├── accountMenu.spec.js
│   │   ├── editProfile.spec.js
│   │   ├── changePassword.spec.js
│   │   ├── addressBook.spec.js
│   │   ├── wishlist.spec.js
│   │   ├── newsletterSubscription.spec.js
│   │   ├── notificationPreferences.spec.js
│   │   ├── orderHistory.spec.js
│   │   ├── downloads.spec.js
│   │   ├── recurringPayments.spec.js
│   │   ├── rewardPoints.spec.js
│   │   ├── returns.spec.js
│   │   ├── transactions.spec.js
│   │   ├── affiliateRegister.spec.js
│   │   ├── subscribedProducts.spec.js
│   ├── navigation/
│   │   ├── megaMenuNavigation.spec.js
│   │   ├── headerLinks.spec.js
│   │   ├── footerLinks.spec.js
│   ├── static/
│   │   └── contactUs.spec.js
│   └── responsive/
│       └── responsive.spec.js
│
├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── LogoutPage.js
│   ├── AccountPage.js
│   ├── EditProfilePage.js
│   ├── ChangePasswordPage.js
│   ├── AddressBookPage.js
│   ├── WishlistPage.js
│   ├── NewsletterPage.js
│   ├── NotificationsPage.js
│   ├── OrderHistoryPage.js
│   ├── DownloadsPage.js
│   ├── RecurringPaymentsPage.js
│   ├── RewardPointsPage.js
│   ├── ReturnsPage.js
│   ├── TransactionsPage.js
│   ├── AffiliatePage.js
│   ├── SubscribedProductsPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── ComparePage.js
│   ├── HeaderPage.js
│   ├── FooterPage.js
│   ├── ContactUsPage.js
│   └── NavigationPage.js
│
├── utils/
│   ├── helpers.js
│   ├── locators.js
│   └── testData.js
│
├── config/
│   ├── env.dev.json
│   ├── env.qa.json
│   └── env.prod.json
│
├── .env
├── playwright.config.js
├── global.setup.js
├── global.teardown.js
├── package.json
└── README.md
```

---

## ✅ Detailed Test Cases (Per File)

\[... existing test case content continues here ...]

---

## 🧭 Test Strategy for Laterals

### 1. Test Architecture Overview

- Folder structure documented above
- `tests/` contains modular specs, `pages/` contains Page Object Models
- `playwright.config.js` handles timeouts, retries, reporters, and project devices

### 2. Execution Workflow

- To run all tests:

  ```bash
  npx playwright test
  ```

- To run a specific suite:

  ```bash
  npx playwright test tests/account/login.spec.js
  ```

- To run by environment:

  ```bash
  NODE_ENV=qa npx playwright test
  ```

### 3. Environment Configuration

- Environment managed via `.env` and `config/env.ENV.json`
- Loaded using `helpers.js` for consistent runtime behavior
- Example:

  ```json
  {
    "baseUrl": "https://ecommerce-playground.lambdatest.io",
    "username": "test@example.com",
    "password": "Test123"
  }
  ```

### 4. Test Design Principles

- One feature per `.spec.js` file
- Use of `test.describe()` and `test.step()` for grouping
- All actions wrapped in readable assertions
- Reuse of page objects for login, cart, checkout, etc.

### 5. Utilities and Reuse

- `helpers.js`: session login, env loader
- `locators.js`: centralized locator exports (optional)
- `testData.js`: reusable data across tests

### 6. Test Coverage Mapping

Example:

| Module     | Spec File                      | Covered Features                  |
| ---------- | ------------------------------ | --------------------------------- |
| Login      | login.spec.js                  | UI, invalid/valid login, alerts   |
| Cart       | cart.spec.js                   | Add, remove, update quantity      |
| Newsletter | newsletterSubscription.spec.js | Yes/No toggle, alert, persistence |

### 7. CI/CD Integration

- `playwright.config.js` supports reporters
- GitHub Actions sample:

  ```yaml
  - name: Run Playwright tests
    run: npx playwright test --reporter html
  ```

- Use `--trace on` or `--debug` for flaky test debugging

### 8. Reporting & Debugging

- Enable trace viewer for flaky UI:

  ```bash
  npx playwright show-trace trace.zip
  ```

- Screenshot/video capture supported out-of-the-box
- Test retries configured in `playwright.config.js`

---
