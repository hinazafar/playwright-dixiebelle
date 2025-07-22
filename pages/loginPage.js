// pages/loginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.locator('input[name="login_email"]');
    this.passwordField = page.locator('input[name="login_pass"]');
    this.loginButton = page.locator("//input[@value='Sign in']");
  }

  async gotoLogin() {
    await this.page.goto('/login.php');
  }

  async login(email, password) {
    await this.emailField.fill(email);
    console.log("Received Email value: "+email);
    console.log("Received Passowrd value: "+password);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
