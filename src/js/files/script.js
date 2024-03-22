// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let language_btn = document.querySelector(".header-language__button");
let body = document.body;


language_btn.addEventListener("click", (e) => {

    body.classList.toggle("clicked_language");
});