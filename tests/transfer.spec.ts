import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost/login');
  await page.getByRole('textbox', { name: 'Type your email' }).click();
  await page.getByRole('textbox', { name: 'Type your email' }).fill('testuser@example.com');
  await page.getByRole('textbox', { name: 'Type your password' }).click();
  await page.getByRole('textbox', { name: 'Type your password' }).fill('qwerty123');
  await page.getByRole('button', { name: 'Login' }).click();
  });
  
  test('Успешный перевод денег', async ({ page }) => {
  await page.getByRole('textbox', { name: '+7 999 123-45-' }).click();
  await page.getByRole('textbox', { name: '+7 999 123-45-' }).fill('+79819067661');
  await page.getByRole('spinbutton', { name: '0.00' }).click();
  await page.getByRole('spinbutton', { name: '0.00' }).fill('500');
  await page.getByRole('textbox', { name: 'e.g. debt repayment' }).click();
  await page.getByRole('textbox', { name: 'e.g. debt repayment' }).fill('lunch momey');
  await page.getByRole('textbox', { name: 'e.g. debt repayment' }).click();
  await page.getByRole('textbox', { name: 'e.g. debt repayment' }).fill('lunch money');
  await page.getByRole('button', { name: 'Send' }).click();
});