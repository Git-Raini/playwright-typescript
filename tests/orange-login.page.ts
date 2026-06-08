import { Page, expect } from '@playwright/test';

export class OrangeHRMLoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(this.page).toHaveTitle(/OrangeHRM/);
    }

    async getStartedLink() {
        await this.page.getByRole('link', { name: /OrangeHRM/i }).click();
        await expect(this.page).toHaveTitle(/OrangeHRM/);
    }

    async login(username: string, password: string) {
        await this.page.getByPlaceholder('username').fill(username);
        await this.page.getByPlaceholder('password').fill(password);
        await this.page.getByRole('button', { name: /login/i }).click();
    }
}