# playwright-typescript

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Git-Raini/playwright-typescript)

## Running Tests

To run Playwright tests, use the following commands:

### Regular Test Run (Headless)
```bash
npx playwright test
```

### Run Tests with UI Mode
```bash
npx playwright test --ui
```

### Advanced Commands

- **Debug Mode**: Run tests in debug mode to pause and inspect
  ```bash
  npx playwright test --debug
  ```

- **Trace Mode**: Capture traces for test execution
  ```bash
  npx playwright test --trace on
  ```

- **Show Report**: View the HTML report after test execution
  ```bash
  npx playwright show-report
  ```

- **Run Specific Tests**: 
  ```bash
  npx playwright test tests/example.spec.ts
  ```

- **Run Tests by Project** (if multiple projects are configured in playwright.config.ts):
  ```bash
  npx playwright test --project=chromium
  ```

Note: If you have defined npm scripts in your package.json, you can also run them using `npm test` or custom script names.