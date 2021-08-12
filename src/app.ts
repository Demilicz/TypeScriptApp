import { Invoice } from './module/invoice.js';
import { Payment } from './module/payment';
import { HasFormater } from "./interface/formater.js";


const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


console.log(toFrom);
console.log(details);
console.log(type);
console.log(amount);
console.log(form);




