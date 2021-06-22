const btnazul = document.getElementById("btnazul");
const btnplomoclaro = document.getElementById("btnplomoclaro");
const btnblanco = document.getElementById("btnblanco");
const btnrojo = document.getElementById("btnrojo");
const btnplomomedio = document.getElementById("btnplomomedio");
const btnnegro= document.getElementById("btnnegro");
const btnplomooscuro = document.getElementById("btnplomooscuro");
const contenedor = document.querySelector('#container');

import{btnazul as a,btnplomoclaro as b,btnblanco as c,btnrojo as d,
    btnplomomedio as e,btnnegro as f,btnplomooscuro as g} from "./botones.js";

btnazul.onclick = () =>{
    a(contenedor);
}
btnplomoclaro.onclick = () =>{
    b(contenedor);
}
btnblanco.onclick = () =>{
    c(contenedor);
}
btnrojo.onclick = () =>{
    d(contenedor);
}
btnplomomedio.onclick = () =>{
    e(contenedor);
}
btnnegro.onclick = () =>{
    f(contenedor);
}
btnplomooscuro.onclick = () =>{
    g(contenedor);
}

