const { Given } = require("@wdio/cucumber-framework");

const HomePage = require("../pageobjects/home.page");
const config = require("../../wdio.conf").config;

Given(/^I am on (\w+) screen$/, async(screenName) => {
    console.log(await browser.getUrl());
    if(! await (await browser.getUrl()).includes(config.baseUrl))
        await HomePage.open();
    else
        console.log("************NOT NAVIGATING************");
    console.log("I am on " + screenName + " page");
});

Given("I have logged in successfully", async() => {
    HomePage.validateSuccessfulRegistration();
});

Given("I have added products to cart", async() => {
    await HomePage.validateCartMessage();
});