var Payment = /** @class */ (function () {
    function Payment(recipient, deteils, amount) {
        this.recipient = recipient;
        this.deteils = deteils;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.recipient + " is owed \u00A3" + this.amount + " for " + this.deteils;
    };
    return Payment;
}());
export { Payment };
