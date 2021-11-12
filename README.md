# Test automation prototype using [WebdriverIO](https://webdriver.io/) and [Cucumber](https://cucumber.io/)

Test URL: http://automationpractice.com/

## Scripting methodologies

1. Page Object Model
2. Reporters: Spec, Allure
3. Cucumber

## Setup

### Pre-requisite

1. Node latest LTS version should be present with environment setup<br>
   Check by running `node -v` whether node is available.

## Steps to run test locally

1. Clone/ Download `main` branch code to local system.
2. Open command prompt/ powershell.
3. Run `npm i` to install all the dependencies.
4. To run the tests, run `npx wdio wdio.conf.js`

## To generate allure reports

### Pre-requisites

Check if `allure-results` folder is appearing in project root

### Steps

1. Install `allure-commandline` as a global dependency.<br> Run `npm i allure-commandline -g`
2. Run in project root: `allure generate --clean`
3. Run `allure open`

This should open reports in default browser.
