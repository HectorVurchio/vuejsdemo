export default class EventPage {
  selectedButton(element, cln) {
    const parent = element.parentElement;
    const childrens = parent.children;
    for (let i = 0; i < childrens.length; i++) {
      childrens[i].removeAttribute("class");
      if (childrens[i] === element) {
        childrens[i].setAttribute("class", `${cln}-pushed`);
      } else {
        childrens[i].setAttribute("class", `${cln}`);
      }
    }
  }
}
