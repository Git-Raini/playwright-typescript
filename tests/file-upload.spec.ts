import { test, expect } from '@playwright/test';

test('Playwright file upload test', async ({ page }) => {
  test.setTimeout(120000);

  const filePayload = {
    name: 'file-upload.sample.txt',
    mimeType: 'text/plain',
    buffer: new TextEncoder().encode('This is a sample mock text file created automatically.'),
  };

  // 1. Navigate to the sandbox application
  await page.goto('https://the-internet.herokuapp.com/upload', { waitUntil: 'domcontentloaded', timeout: 120000 });

  // 2. Upload the file payload without requiring fs/node typings
  await page.locator('input#file-upload').setInputFiles(filePayload);
  await page.locator('input#file-submit').click();

  // 3. Verify the success states
  await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await expect(page.locator('div#uploaded-files')).toContainText('file-upload.sample.txt');
});
/*Method 2: Multiple files
await page.locator('input[type="file"]')
 .setInputFiles(['file1.pdf', 'file2.pdf']);

Method 3: Using file chooser event
const [fileChooser] = await Promise.all([
 page.waitForEvent('filechooser'),
 page.locator('button').click()
]);
await fileChooser.setFiles('path/to/file.pdf');


Method 4: Buffer upload
await page.locator('input[type="file"]').setInputFiles({
 name: 'file.txt',
 mimeType: 'text/plain',
 buffer: Buffer.from('file content')
*/