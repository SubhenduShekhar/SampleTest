const Page = require("./page");

class Payments extends Page {
    get productName() { return $('[class="product-name"]'); }
}