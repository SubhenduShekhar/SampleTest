const Page = require("./page");

class HomePage extends Page {
    get signInBtn() { return $('[class="login"]'); }
    get accountName() { return $('[class="account"]'); }
    get signOutBtn() { return $('[class="logout"]'); }
    get tShirtsTab() { return $('(//*[@title="T-shirts"])[2]'); }
    get item() { return $('(//*[@title="Faded Short Sleeve T-shirts"])[2]'); }
    get addToCart() { return $('[title="Add to cart"]'); }
    get proceedToCheckout() { return $('[title="Proceed to checkout"]'); }
    get proceedToCheckout2() { return $('(//*[@title="Proceed to checkout"])[2]'); }
    get proceedToCheckoutAddress() { return $('[name="processAddress"]'); }
    get proceedToCheckoutCarrier() { return $('[name="processCarrier"]'); }
    get termsAndCondition() { return $('[for="cgv"]'); }
    get paymentByBankWire() { return $('[class="bankwire"]'); }
    get cartItemMessage() { return $('[class="ajax_cart_product_txt "]'); }

    async clickSignIn() {
        await this.signInBtn.click();
    }

    async validateSuccessfulRegistration(expectToPresent) {
        if(expectToPresent == undefined)
            expectToPresent = true;

        if(expectToPresent) {
            await this.accountName.waitForDisplayed({timeout: 5000});
            await expect(await this.accountName.isDisplayed()).toBe(true);
        }
        else {
            await this.accountName.waitForDisplayed({timeout: 5000, reverse: true});
            await expect(await this.accountName.isDisplayed()).toBe(false);
        }
    }

    async clickSignOut() {
        await this.signOutBtn.click();
        await this.accountName.waitForDisplayed({timeout: 3000, reverse: true});
    }

    async selectItems() {
        await this.tShirtsTab.click();
        await this.item.scrollIntoView();
        await this.item.waitForDisplayed({timeout: 3000});
        await this.item.moveTo();
    }

    async clickAddToCart() {
        await this.addToCart.click();
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckout.waitForClickable({timeout:15000});
        await this.proceedToCheckout.scrollIntoView();
        await this.proceedToCheckout.click();
    }

    async clickProceedToCheckout2() {
        await this.proceedToCheckout2.waitForClickable({timeout:5000});
        await this.proceedToCheckout2.scrollIntoView();
        await this.proceedToCheckout2.click();
    }

    async clickTermsAndConditions() {
        await this.termsAndCondition.waitForClickable({timeout:5000});
        await this.termsAndCondition.click();
    }

    async clickProceedToCheckoutAddress() {
        await this.proceedToCheckoutAddress.waitForClickable({timeout: 5000});
        await this.proceedToCheckoutAddress.click();
    }

    async clickProceedToCheckoutCarrier() {
        await this.proceedToCheckoutCarrier.waitForClickable({timeout: 5000});
        await this.proceedToCheckoutCarrier.click();
    }

    async validatebankWire() {
        await this.paymentByBankWire.waitForDisplayed({timeout: 5000});
        expect(this.paymentByBankWire.isDisplayed()).toBe(true);
    }

    async validateCartMessage() {
        await this.cartItemMessage.waitForDisplayed({timeout: 5000});
        expect(await this.cartItemMessage.isDisplayed()).toBe(true);
    }
}

module.exports = new HomePage();