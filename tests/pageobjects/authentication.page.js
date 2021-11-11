const Page = require("./page");

class Authentication extends Page {
    get emailAddressTxtFld() { return $('[id="email_create"]') }
    get createAnAccount() { return $('[id="SubmitCreate"]') }

    async enterEmailAddress(textToEnter) {
        await this.emailAddressTxtFld.setValue(textToEnter);
    }

    async clickCreateAccountBtn() {
        await this.createAnAccount.click();
    }
}

module.exports = new Authentication();