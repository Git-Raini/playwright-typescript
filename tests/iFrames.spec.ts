import{test,expect} from'@playwright/test';

test('iFrame test',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');  
    const practiceIframe=page.frameLocator('#courses-iframe');

    await page.locator('#courses-iframe').scrollIntoViewIfNeeded();

    //Click the "All Access Plan" link/button located INSIDE the iframe
  // This demonstrates Method 1 (frameLocator) from your guide
  const internalLink = practiceIframe.getByRole('link', { name: 'All Access plan' }).first();
  await internalLink.click();

  // Assert that the frame successfully navigated or updated based on the click
  await expect(practiceIframe.getByRole('heading', { name: 'All Access Subscription' })).toBeVisible({ timeout: 10000 });
});

//  Method 1: Using frameLocator
    
// await page.frameLocator('iframe#myframe')
//  .locator('button')
//  .click();

// // Method 2: Using frame() for named frames
// const frame = page.frame('frameName');
// await frame.locator('button').click();


// // Method 3: Using contentFrame() for iframe elements
// const iframeElement = page.locator('iframe#myframe');
// const frame = await iframeElement.contentFrame();
// await frame.locator('button').click(); 

