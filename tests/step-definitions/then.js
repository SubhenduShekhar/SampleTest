const { Given, When, Then } = require("@wdio/cucumber-framework");

const HomePage = require("../pageobjects/home.page");
const Authentication = require("../pageobjects/authentication.page");
const RegistrationPage = require("../pageobjects/registration.page");
const config = require("../../wdio.conf").config;
const LoginPage = require("../pageobjects/login.page");

// Given(/^I am on (\w+) screen$/, async(screenName) => {
//     console.log(await browser.getUrl());
//     if(! await (await browser.getUrl()).includes(config.baseUrl))
//         await HomePage.open();
//     else
//         console.log("************NOT NAVIGATING************");
//     console.log("I am on " + screenName + " page");
// });

// Given("I have logged in successfully", async() => {
//     HomePage.validateSuccessfulRegistration();
// });

// Given("I have added products to cart", async() => {
//     await HomePage.validateCartMessage();
// });

// When("I click on signin button", async() => {
//     await HomePage.clickSignIn();
// });

// When("I enter email {string}", async(email) => {
//     await Authentication.enterEmailAddress(email);
// });

// When(/^I click on create and account button$/, async() => {
//     await Authentication.clickCreateAccountBtn();
// })

// When(/^I fill registration form with below details$/, async(table) => {
//     await RegistrationPage.fillPersonalInfoForm(table.rowsHash());
// });

// When("I click on register button", async() => {
//     await RegistrationPage.clickRegisterBtn();
// });

// When("I click on signout link", async() => {
//     await HomePage.clickSignOut();
// });

// When("I enter credentials", async() => {
//     process.env.TestUserName = "test2.user@email.com"
//     process.env.TestPassword = "Password1"
//     await LoginPage.login();
// });

// When("I click on signin button for login", async() => {
//     await LoginPage.clickSignIn();
// });

// When("I select t-shirts", async() => {
//     await HomePage.selectItems();
// });

// When("I click on add to cart", async() => {
//     await HomePage.clickAddToCart();
// });

// When("I proceed to checkout", async() => {
//     await HomePage.clickProceedToCheckout();
//     await HomePage.clickProceedToCheckout2();
//     await HomePage.clickProceedToCheckoutAddress();
//     await HomePage.clickTermsAndConditions();
//     await HomePage.clickProceedToCheckoutCarrier();
// });

Then("I should be able to add to cart successfully", async() => {
    await HomePage.validateCartMessage();
});

Then(/^Registration form page should be displayed$/, async() => {
    await RegistrationPage.validateRegistrationPage();
});

Then("I should be able to register successfully", async() => {
    await HomePage.validateSuccessfulRegistration();
});

Then("I should be able to logout successfully", async() => {
    await HomePage.validateSuccessfulRegistration(false);
});

Then("I should be able to login successfully", async() => {
    await HomePage.validateSuccessfulRegistration(true);
});

Then("I should be able checkout successfully", async() => {
    HomePage.validatebankWire();
});
