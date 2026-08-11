const injectAny: any = inject;
const homePage: any = injectAny('homePage');
const loginPage: any = injectAny('loginPage');

Given('I open the home page', async () => {
  await homePage.open();
});

Given('I open the login page', async () => {
  await loginPage.open();
});

Then('I should see the home page title', () => {
  homePage.verifyTitle();
});

Then('I should see the login form', () => {
  loginPage.seeLoginForm();
});
