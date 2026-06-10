# Playwright TypeScript Test Suite

End-to-end automation testing project built with Playwright and TypeScript. Tests cover multiple websites including OrangeHRM, payment gateways, and iframe interactions.

## Prerequisites

- Node.js (LTS recommended)
- npm or yarn

## Installation

```bash
npm ci
npx playwright install --with-deps
```

## Test Structure

| File | Description |
|------|-------------|
| `tests/example.spec.ts` | Default Playwright example tests (playwright.dev) |
| `tests/iFrames.spec.ts` | Cross-origin iframe interaction (All Access plan click + navigation assertion) |
| `tests/orange-login.spec.ts` | OrangeHRM login tests using a Page Object Model pattern |
| `tests/orange-login.page.ts` | Page Object Model for the OrangeHRM login page |
| `tests/orange.spec.ts` | OrangeHRM user management (Add User flow) |
| `tests/multiple-browser.spec.ts` | Launching multiple browser contexts independently |
| `tests/payment.spec.ts` | End-to-end sandbox payment and Stripe iframe payment flow |

## Running Tests

### Run all tests (all browsers)
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/iFrames.spec.ts
```

### Run by project
```bash
npx playwright test --project=chromium
```

### UI Mode (interactive)
```bash
npx playwright test --ui
```

### Debug Mode
```bash
npx playwright test --debug
```

### Trace Mode
```bash
npx playwright test --trace on
```

### HTML Report
```bash
npx playwright show-report
```

## CI/CD

GitHub Actions workflow (`.github/workflows/playwright.yml`) runs on push to `main`/`master` and pull requests. It installs dependencies, installs browsers with dependencies, runs the full suite, and uploads the Playwright HTML report as an artifact.

## Tech Stack

- [Playwright](https://playwright.dev/) — Browser automation framework
- TypeScript
- Page Object Model (POM) pattern (OrangeHRM tests)
