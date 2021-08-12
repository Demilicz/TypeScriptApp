import { HasFormater } from "../interface/formater";

export class ListTemplate {
  constructor ( private container: HTMLUListElement ) {

  }
  render (item: HasFormater, heading: string, pos: "start" | "end") {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    h4.innerHTML = heading;
    p.innerHTML = item.format();
    li.append(h4);
    li.append(p);

    if (pos === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }


  }
}