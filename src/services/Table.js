export default class Table {
  #head = [];
  #body = [];
  #error = false;
  #paininass = "";
  constructor(dataObj) {
    const arr = Object.entries(dataObj); // due to data nature
    const row1 = arr.shift().pop(); //due to data nature
    if (row1["Error"] != undefined) {
      this.#error = true;
    }
    this.#head = Object.values(row1);
    this.#body = arr;
  }
  createTable() {
    const table = document.createElement("table");
    const tableHead = this.#tableHead();
    const tableBody = this.#tableBody();
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    return table;
  }
  #tableHead() {
    const tr = document.createElement("tr");
    const frag = document.createDocumentFragment();
    this.#head.forEach((item, index) => {
      if (index < 4) {
        let th = document.createElement("th");
        let txt = document.createTextNode(item);
        th.appendChild(txt);
        if (this.#error) {
          th.style.background = "red";
          th.style.color = "yellow";
        }
        frag.appendChild(th);
      }
    });
    tr.appendChild(frag);
    return tr;
  }
  #tableBody() {
    const tbody = document.createDocumentFragment();
    this.#body.forEach((item) => {
      let tbrow = item.pop(); // due to data nature
      let tr = document.createElement("tr");
      let i = 0;
      for (const [key, value] of Object.entries(tbrow)) {
        this.#paininass = key;
        //due to data nature
        let td = document.createElement("td");
        let txt = document.createTextNode(value);
        td.appendChild(txt);
        tr.appendChild(td);
        i++;
        if (i == 4) {
          break;
        }
      }
      tbody.appendChild(tr);
    });
    return tbody;
  }
}
