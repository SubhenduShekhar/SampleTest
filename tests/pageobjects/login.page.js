const Page = require('./page');

class LoginPage extends Page {
    get email () { return $('#email') }
    get password () { return $('#passwd') }
    get signInBtn () { return $('#SubmitLogin') }

    async login () {
        var email = process.env.TestUserName;
        var password = process.env.TestPassword;

        await this.email.waitForDisplayed({timeout:3000});

        await this.email.setValue(email);
        await this.password.setValue(password);
    }

    async clickSignIn() {
        await this.signInBtn.click();
    }
}

module.exports = new LoginPage();
