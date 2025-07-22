// tests/login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { credentials } from '../utils/testData';


test('Login with invalid credentials shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLogin();
  await loginPage.login(credentials.invalidEmail, credentials.invalidPassword);
  await expect(page.locator('#alertBox-message-text1')).toBeVisible(); // adjust based on actual error message
});
