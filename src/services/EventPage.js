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
  deselectedButton(parent, cln) {
    const childrens = parent.children;
    for (let i = 0; i < childrens.length; i++) {
      let clsplitted = childrens[i].className.split("-");
      if (clsplitted.length == 3 && clsplitted.pop() == "pushed") {
        childrens[i].removeAttribute("class");
        childrens[i].setAttribute("class", `${cln}`);
      }
    }
  }
}
