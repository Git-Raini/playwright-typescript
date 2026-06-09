import { test, expect } from '@playwright/test';

test.describe('Payment Gateway Automation Suite', () => {
    
    test('Should successfully process an end-to-end sandbox payment', async ({ page }) => {
        // Step 1: Navigate to the target practice platform
        await page.goto('https://automationexercise.com', { timeout: 60000, waitUntil: 'domcontentloaded' });

        // Step 2: Add item to cart and navigate to checkout
        await page.locator('.add-to-cart').first().click();
        await page.getByText('View Cart').click();
        await page.getByText('Proceed To Checkout').click();

        await page.locator('.modal-body a[href="/login"]').click();
        await page.locator('input[data-qa="login-email"]').fill('test_account_qa@example.com');
        await page.locator('input[data-qa="login-password"]').fill('PlaywrightQATest!');
        await page.locator('button[data-qa="login-button"]').click();
        await page.locator('a[href="/view_cart"]').first().click();
        await page.getByText('Proceed To Checkout').click();

        // Step 3: Click 'Place Order' to land on the Payment Gateway interface
        await page.locator('a[href="/payment"]').click();

        // Step 4: Fill out generic payment details
        await page.locator('input[data-qa="name-on-card"]').fill('QA Automation Engineer');
        
        // Handling Payment Elements (Use Stripe/Standard test card combinations)
        await page.locator('input[data-qa="card-number"]').fill('4242424242424242'); 
        await page.locator('input[data-qa="cvc"]').fill('311');
        await page.locator('input[data-qa="expiry-month"]').fill('12');
        await page.locator('input[data-qa="expiry-year"]').fill('2029');

        // Step 5: Submit the payment and wait for network/loading spinner resolution
        await page.locator('button[data-qa="pay-button"]').click();

        // Step 6: Validate successful transaction page
        // Wait explicitly for the success URL or text to confirm processing completed
        await expect(page).toHaveURL(/.*payment_done/);

        const successMessage = page.locator('[data-qa="order-placed"] b');
        await expect(successMessage).toBeVisible();
        await expect(successMessage).toHaveText('Order Placed!');
    });

    test('Should handle hosted Stripe iframe elements (Advanced Template)', async ({ page }) => {
        // Use this template if your practice site embeds secure Stripe Elements
        await page.goto('https://github.io'); // Public Stripe Element sandbox

        // Locate the hosted payment iframe by its selector or URL
        const cardFrameElement = page.frameLocator('iframe[name*="__privateStripeFrame"]');
        
        // Interact directly with inside elements using the frame locator
        await cardFrameElement.locator('input[name="cardnumber"]').fill('4242424242424242');
        await cardFrameElement.locator('input[name="exp-date"]').fill('12/29');
        await cardFrameElement.locator('input[name="cvc"]').fill('123');
    });
});
