
var estado = 0;
const cambiarColorBlanco = (elementoDom1) => { 
    if (estado === 0) {
       // elementoDom.style.background = '#182233';
       // elementoDom.style.color = 'write';
        elementoDom1.style.background = '#0a192e';
       // elementoDom.style = '4px solid #91afc7';
        estado = 1;
        
    }else{
       // elementoDom.style.background = '#afc5e3';
        elementoDom1.style.background = '#fff';
       // elementoDom.style.border = '4px solid #25631';
       // elementoDom.style.color = 'black';
        estado = 0;
    }

};

export {cambiarColorBlanco};