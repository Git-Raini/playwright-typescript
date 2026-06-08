import {test, expect} from '@playwright/test';

// Test case to verify the title of the OrangeHRM login page
test('has title', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle(/OrangeHRM/);
});
// Test case to verify the presence of the "OrangeHRM" link and its functionality
test('getstarted link', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('link', { name: /OrangeHRM/i }).click();
    await expect(page).toHaveTitle(/OrangeHRM/);
});
// Positive test case for valid credentials
test('login with valid credentials', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/dashboard/);
});
// Negative test case for login with invalid credentials
test('login with invalid credentials', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('invalid');
    await page.getByPlaceholder('Password').fill('wrong');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).not.toHaveURL(/dashboard/);
    await expect(page.locator('.oxd-toast-content, .oxd-alert-content, .alert-content')).toBeVisible({ timeout: 10000 });
});

// Test case to verify the search bar functionality after logging in
test('Search bar functionality', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByPlaceholder('Search').fill('Admin');
    await page.getByText('Admin').click();
});