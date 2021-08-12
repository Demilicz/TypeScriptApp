var invoice = /** @class */ (function () {
    function invoice(client, deteils, amount) {
        this.client = client;
        this.deteils = deteils;
        this.amount = amount;
    }
    invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.deteils;
    };
    return invoice;
}());
export { invoice };
