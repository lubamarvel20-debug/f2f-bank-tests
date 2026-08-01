import { test, expect } from '@playwright/test';

test('Авторизация с неверным паролем', async ({ page }) => {
  await page.goto('http://localhost/login');
  await page.getByRole('textbox', { name: 'Type your email' }).click();
  await page.getByRole('textbox', { name: 'Type your email' }).fill('testuser@example.com');
  await page.getByRole('textbox', { name: 'Type your password' }).click();
  await page.getByRole('textbox', { name: 'Type your password' }).fill('qwerty1');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Login failed')).toBeVisible();
});