import { test, expect } from '@playwright/test';

test("Verify that the title will be TTA Cart", async ({ page}) => {
    // await page.pause(); 
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/")
    // await page.waitForTimeout(3000);
    await expect(page).toHaveTitle("TTACart - Login");
    await page.waitForTimeout(3000);
});

// $env:PWDEBUG=0
// this will be run in headless mode

//   npx playwright test
//     Runs the end-to-end tests.

//   npx playwright test --ui
//     Starts the interactive UI mode.

//   npx playwright test --project=chromium
//     Runs the tests only on Desktop Chrome.

//   npx playwright test example
//     Runs the tests in a specific file.

//   npx playwright test --debug
//     Runs the tests in debug mode.

//   npx playwright codegen
//     Auto generate tests with Codegen.

// We suggest that you begin by typing:

//     npx playwright test