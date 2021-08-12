export class Payment {
    constructor(recipient, deteils, amount) {
        this.recipient = recipient;
        this.deteils = deteils;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.deteils}`;
    }
}
