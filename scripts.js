import MenuMobile from "./modulos/menumobile.js";
import ScrollMouse from "./modulos/scrollmouse.js";
const menuMobile = new MenuMobile(".menu-btn", ".nav-links");
menuMobile.init();
const scrollMouse = new ScrollMouse("[data-show='show-up']");
scrollMouse.init();
