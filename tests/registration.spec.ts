import { test, expect } from '@playwright/test';

test('Регистрация нового пользователя', async ({ page }) => {
  await page.goto('http://localhost/login');
  await page.getByRole('link', { name: 'Register page' }).click();
  await page.getByRole('textbox', { name: 'Type your name' }).click();
  await page.getByRole('textbox', { name: 'Type your name' }).fill('Иван');
  await page.getByRole('textbox', { name: 'Type your surname' }).click();
  await page.getByRole('textbox', { name: 'Type your surname' }).fill('Петров');
  await page.getByRole('textbox', { name: 'Type your email' }).click();

  const uniqueEmail = `test+${Date.now()}@example.com`;
  await page.getByRole('textbox', { name: 'Type your email' }).fill(uniqueEmail);
 
  await page.getByRole('textbox', { name: 'Type your message...' }).click();
  await page.getByRole('textbox', { name: 'Type your message...' }).fill('qwerty123');
  await page.getByRole('button', { name: 'Register' }).click(); 
  await expect(page.getByText('Registration successful! Please log in.')).toBeVisible();
});