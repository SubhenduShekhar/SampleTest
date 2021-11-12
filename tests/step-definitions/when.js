const { When } = require("@wdio/cucumber-framework");

const HomePage = require("../pageobjects/home.page");
const Authentication = require("../pageobjects/authentication.page");
const RegistrationPage = require("../pageobjects/registration.page");
const LoginPage = require("../pageobjects/login.page");

When("I click on signin button", async() => {
    await HomePage.clickSignIn();
});

When("I enter email {string}", async(email) => {
    await Authentication.enterEmailAddress(email);
});

When(/^I click on create and account button$/, async() => {
    await Authentication.clickCreateAccountBtn();
})

When(/^I fill registration form with below details$/, async(table) => {
    await RegistrationPage.fillPersonalInfoForm(table.rowsHash());
});

When("I click on register button", async() => {
    await RegistrationPage.clickRegisterBtn();
});

When("I click on signout link", async() => {
    await HomePage.clickSignOut();
});

When("I enter credentials", async() => {
    // process.env.TestUserName = "test2.user@email.com"
    // process.env.TestPassword = "Password1"
    await LoginPage.login();
});

When("I click on signin button for login", async() => {
    await LoginPage.clickSignIn();
});

When("I select t-shirts of name {string}", async(productName) => {
    await HomePage.selectItems(productName);
});

When("I click on add to cart", async() => {
    await HomePage.clickAddToCart();
});

When("I proceed to checkout", async() => {
    await HomePage.clickProceedToCheckout();
    await HomePage.clickProceedToCheckout2();
    await HomePage.clickProceedToCheckoutAddress();
    await HomePage.clickTermsAndConditions();
    await HomePage.clickProceedToCheckoutCarrier();
});