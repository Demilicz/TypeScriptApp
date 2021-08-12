import { Invoice } from './module/invoice.js';
import { Payment } from './module/payment.js';
import { ListTemplate} from './module/listTemplate.js';
import { HasFormater } from "./interface/formater.js";


const form = document.querySelector(".new-item-form") as HTMLFormElement;
const ul = document.querySelector(".item-list") as HTMLUListElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const List = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormater;

  if(type.value === 'invoice'){
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  }
  else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  List.render(doc, type.value, 'end');


})




