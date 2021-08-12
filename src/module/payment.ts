import { HasFormater } from "../interface/formater.js";

export class Payment implements HasFormater {
  constructor (
    readonly recipient: string,
    private deteils: string,
    public amount: number
  )
   {}
    format () {
      return `${this.recipient} is owed £${this.amount} for ${this.deteils}`;
    }
}