import { cambiarColorBlanco } from './Oscuro.js';
const body = document.querySelector(".body");
const button = document.querySelector(".btn1");

button.addEventListener('click', () => {
    cambiarColorBlanco(body);
});