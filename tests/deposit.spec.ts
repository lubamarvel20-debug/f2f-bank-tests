import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost/login');
  await page.getByRole('textbox', { name: 'Type your email' }).fill('testuser@example.com');
  await page.getByRole('textbox', { name: 'Type your password' }).fill('qwerty123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://localhost/');
});

test('Пополнение баланса', async ({ page }) => {
  const balanceLocator = page.getByRole('heading', { name: 'Balance:' });
  const oldBalanceText = await balanceLocator.textContent();
  await page.getByRole('link', { name: 'Transactions' }).click();
  await page.getByRole('button', { name: 'Add balance' }).click();
  await page.getByRole('spinbutton', { name: 'Enter sum' }).fill('500');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await page.getByRole('link', { name: 'Main' }).click();
  await expect(balanceLocator).not.toHaveText(oldBalanceText, { timeout: 10000 });
});
