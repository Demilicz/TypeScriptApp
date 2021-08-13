import { Invoice } from './module/invoice.js';
import { Payment } from './module/payment.js';
import { ListTemplate } from './module/listTemplate.js';
const form = document.querySelector(".new-item-form");
const ul = document.querySelector(".item-list");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const List = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    List.render(doc, type.value, 'end');
});
