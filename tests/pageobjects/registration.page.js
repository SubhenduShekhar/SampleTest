const Page = require("./page");

class Registration extends Page {
    get personalInfoForm() { return $('[id="account-creation_form"]'); }
    get title() { return $('[id="id_gender1"]'); }
    get firstName() { return $('[id="customer_firstname"]'); }
    get lastName() { return $('[id="customer_lastname"]'); }
    get email() { return $('[id="email"]'); }
    get password() { return $('[id="passwd"]'); }
    get daysDD() { return $('[id="days"]'); }
    get monthsDD() { return $('[id="months"]'); }
    get yearsDD() { return $('[id="years"]'); }
    get addrFirstname() { return $('[id="firstname"]'); }
    get addrLastName() { return $('[id="lastname"]'); }
    get address1() { return $('[id="address1"]'); }
    get city() { return $('[id="city"]'); }
    get stateDD() { return $('[id="id_state"]'); }
    get postcode() { return $('[id="postcode"]'); }
    get countryDD() { return $('[id="id_country"]'); }
    get phoneMobile() { return $('[id="phone_mobile"]'); }
    get alias() { return $('[id="alias"]'); }
    get registerBtn() { return $('[id="submitAccount"]'); }

    async validateRegistrationPage() {
        await this.personalInfoForm.waitForDisplayed({timeout:5000});
        await expect(await this.personalInfoForm.isDisplayed()).toBe(true);
    }

    async fillPersonalInfoForm(data) {
        await this.title.click();
        await this.firstName.setValue(data["FirstName"]);
        await this.lastName.setValue(data["LastName"]);
        await this.email.setValue(data["Email"]);
        await this.password.setValue(data["Password"]);
        await this.daysDD.selectByAttribute("value", data["Day"]);
        await this.monthsDD.selectByAttribute("value", data["Month"]);
        await this.yearsDD.selectByAttribute("value", data["Year"]);
        await this.address1.setValue(data["Address1"]);
        await this.city.setValue(data["City"]);
        await this.stateDD.selectByAttribute("value", data["State"]);
        await this.postcode.setValue(data["PostCode"]);
        await this.phoneMobile.setValue(data["PhoneMobile"]);

        process.env.TestUserName = data["Email"];
        process.env.TestPassword = data["Password"];
    }

    async clickRegisterBtn() {
        await this.registerBtn.click();
    }
}

module.exports = new Registration();