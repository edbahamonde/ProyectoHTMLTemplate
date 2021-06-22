
var estado = 0;
const cambiarColorBlanco = (elementoDom1) => { 
    if (estado === 0) {
        elementoDom1.style.background = 'rgb(0, 0, 20)';
        elementoDom1.style.color = 'white';
        estado = 1;
        
    }else{
        elementoDom1.style.background = '#fff';
        elementoDom1.style.color = 'black';
        estado = 0;
    }

};

export {cambiarColorBlanco};