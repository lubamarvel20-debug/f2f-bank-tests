import { test, expect } from '@playwright/test';

test('Открыть главную', async ({ page }) => {
  await page.goto('http://localhost/');
  await expect(page).toHaveTitle(/.*/);
});