import outsideClick from "./outsideclick.js";
export default class MenuMobile {
  constructor(menuBtn, menuLinks) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuLinks = document.querySelector(menuLinks);
    this.ativo = "ativo";
    this.events = ["click", "touchstart"];
  }
  toggleMenu(event) {
    event.preventDefault();
    this.menuBtn.classList.toggle(this.ativo);
    this.menuLinks.classList.toggle(this.ativo);
    outsideClick(this.menuLinks, this.events, () => {
      this.menuLinks.classList.remove(this.ativo);
      this.menuBtn.classList.remove(this.ativo);
    });
  }
  addEventMenu() {
    this.menuBtn.addEventListener("click", this.toggleMenu);
  }
  addEvents() {
    this.addEventMenu();
  }
  bindEvents() {
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  init() {
    this.bindEvents();
    this.addEvents();
    return this;
  }
}
