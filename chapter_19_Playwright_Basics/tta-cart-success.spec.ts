import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('tta_secret');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="primary-header"] span')).toContainText('TTACart');
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
});
// $env:PWDEBUG="1"
//  npx playwright open https://google.com
// npx playwright install --dry-run
// C:\Users\Lenovo\AppData\Local\ms-playwright> 
// C:\Users\Lenovo\LearnPlaywright2Xbatch\chapter_19_Playwright_Basics>
// coming out 