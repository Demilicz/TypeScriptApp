import { HasFormater } from "../interface/formater.js";

export class invoice implements HasFormater {
  constructor (
    readonly client: string,
    private deteils: string,
    public amount: number
  )
   {}
    format () {
      return `${this.client} owes $${this.amount} for ${this.deteils}`;
    }
}