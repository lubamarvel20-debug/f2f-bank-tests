import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost/login');
  await page.getByRole('textbox', { name: 'Type your email' }).fill('testuser@example.com');
  await page.getByRole('textbox', { name: 'Type your password' }).fill('qwerty123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://localhost/');
});

test('Проверка валидации номера телефона', async ({ page }) => {
  await page.getByRole('spinbutton', { name: '0.00' }).click();
  await page.getByRole('spinbutton', { name: '0.00' }).fill('15');
  await page.getByRole('textbox', { name: 'e.g. debt repayment' }).click();
  await page.getByRole('textbox', { name: 'e.g. debt repayment' }).fill('chips');
  await page.getByRole('textbox', { name: '+7 999 123-45-' }).click();
  await page.getByRole('textbox', { name: '+7 999 123-45-' }).fill('+7981906');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('Phone must contain 10–15 digits')).toBeVisible();
});