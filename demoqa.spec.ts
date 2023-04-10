import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div:nth-child(6) > div > .avatar > svg').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('UserName').click();
  await page.getByPlaceholder('UserName').fill('vignesh');
  await page.getByPlaceholder('UserName').press('Tab');
  await page.getByPlaceholder('Password').fill('Vikyk@2409');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('link', { name: 'Speaking JavaScript' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Add To Your Collection' }).click();
});