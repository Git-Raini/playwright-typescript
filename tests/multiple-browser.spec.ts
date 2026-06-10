import {test, expect, chromium} from '@playwright/test';
test('multiple browsers',async ({}) => {
    const browser = await chromium.launch();

    //create 2 browser contexts
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    //create 2 pages
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    //Each context has independent cookies/storage
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page2.goto('https://www.google.com/');  

    await context1.close();
    await context2.close();
    await browser.close();
});