var Invoice = /** @class */ (function () {
    function Invoice(client, deteils, amount) {
        this.client = client;
        this.deteils = deteils;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.deteils;
    };
    return Invoice;
}());
export { Invoice };
