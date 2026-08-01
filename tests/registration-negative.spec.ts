import { test, expect } from '@playwright/test';

test('Регистрация с уже существующим email', async ({ page }) => {
  await page.goto('http://localhost/login');
  await page.getByRole('link', { name: 'Register page' }).click();
  await page.getByRole('textbox', { name: 'Type your name' }).click();
  await page.getByRole('textbox', { name: 'Type your name' }).fill('Иван');
  await page.getByRole('textbox', { name: 'Type your surname' }).click();
  await page.getByRole('textbox', { name: 'Type your surname' }).fill('Иванов');
  await page.getByRole('textbox', { name: 'Type your email' }).click();
  await page.getByRole('textbox', { name: 'Type your email' }).fill('testuser@example.com');
  await page.getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('textbox', { name: 'Type your message...' }).fill('qwerty777');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('User with this email already exists')).toBeVisible();
});