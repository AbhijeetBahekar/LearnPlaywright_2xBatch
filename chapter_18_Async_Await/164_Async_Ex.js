async function getTestResults() {
    return "Pass";
}

getTestResults.then(function (result) {
    console.log(result);
});

// getTestResults();

import { test , expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    let r = page.locator;
})

// sample program with error code: 'ERR_MODULE_NOT_FOUND'