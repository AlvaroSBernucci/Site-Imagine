import debounce from "./debounce.js";
export default class ScrollMouse {
  constructor(itensAnimation) {
    this.itensAnimation = [...document.querySelectorAll(itensAnimation)];
    this.activeClass = "ativo";
    this.windowMetade = window.innerHeight * 0.6;
  }
  pegarDistancias() {
    this.distancias = this.itensAnimation.map((secao) => {
      return {
        element: secao,
        distancia: parseInt(secao.getBoundingClientRect().top - this.windowMetade),
      };
    });
    this.distancias[0].element.classList.add(this.activeClass);
  }
  animarScroll() {
    const distScroll = document.documentElement.scrollTop;
    this.distancias.forEach((secao) => {
      if (secao.distancia < distScroll) {
        secao.element.classList.add(this.activeClass);
      } else if (secao.element.classList.contains("ativo")) {
        secao.element.classList.remove(this.activeClass);
      }
    });
  }
  addEventScroll() {
    addEventListener("scroll", debounce(this.animarScroll, 200));
  }
  bindEvents() {
    this.animarScroll = this.animarScroll.bind(this);
  }
  init() {
    this.pegarDistancias();
    this.bindEvents();
    this.addEventScroll();
    return this;
  }
}
