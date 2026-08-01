import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost/login');
  await page.getByRole('textbox', { name: 'Type your email' }).fill('testuser@example.com');
  await page.getByRole('textbox', { name: 'Type your password' }).fill('qwerty123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://localhost/');
});

test('Перевод отрицательной суммы', async ({ page }) => {
  await page.getByRole('textbox', { name: '+7 999 123-45-' }).click();
  await page.getByRole('textbox', { name: '+7 999 123-45-' }).fill('+79819067661');
  await page.getByRole('spinbutton', { name: '0.00' }).click();
  await page.getByRole('spinbutton', { name: '0.00' }).fill('-10');
  await page.getByRole('textbox', { name: 'e.g. debt repayment' }).click();
  await page.getByRole('textbox', { name: 'e.g. debt repayment' }).fill('for the chips');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('Amount must be greater than zero')).toBeVisible();
});