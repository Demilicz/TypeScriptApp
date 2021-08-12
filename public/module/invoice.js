export class Invoice {
    constructor(client, deteils, amount) {
        this.client = client;
        this.deteils = deteils;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.deteils}`;
    }
}
