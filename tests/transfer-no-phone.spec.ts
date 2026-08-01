import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost/login');
  await page.getByRole('textbox', { name: 'Type your email' }).fill('testuser@example.com');
  await page.getByRole('textbox', { name: 'Type your password' }).fill('qwerty123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://localhost/');
});

test('Перевод без указания номера телефона', async ({ page }) => {
  await page.getByRole('spinbutton', { name: '0.00' }).click();
  await page.getByRole('spinbutton', { name: '0.00' }).fill('10');
  await page.getByRole('textbox', { name: 'e.g. debt repayment' }).click();
  await page.getByRole('textbox', { name: 'e.g. debt repayment' }).fill('chips');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('Phone number is required')).toBeVisible();
}); 