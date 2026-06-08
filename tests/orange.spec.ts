import {test, expect} from '@playwright/test';

test('has title', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle(/OrangeHRM/);
});

test('getstarted link', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('link', { name: /OrangeHRM/i }).click();
    await expect(page).toHaveTitle(/OrangeHRM/);
});