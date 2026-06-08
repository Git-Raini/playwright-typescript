import { test, expect } from '@playwright/test';
import { OrangeHRMLoginPage } from './orange-login.page';

test.describe('OrangeHRM Login', () => {
    let loginPage: OrangeHRMLoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new OrangeHRMLoginPage(page);
        await loginPage.goto();
    });

    test('login with valid credentials', async ({ page }) => {
        await loginPage.login('Admin', 'admin123');
        await expect(page).toHaveURL(/dashboard/);
    });

    test('login with invalid credentials', async ({ page }) => {
        await loginPage.login('invalid', 'wrong');
        await expect(page).not.toHaveURL(/dashboard/);
        await expect(page.locator('.oxd-toast-content, .oxd-alert-content, .alert-content')).toBeVisible({ timeout: 10000 });
    });
});