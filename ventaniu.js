class CajaContenedor extends HTMLElement{
    constructor(){
      super();
    }
    connectedCallback(){
      let shadowRoot = this.attachShadow({mode:'open'}); // es importante el modo en close no aparece en el HTML
     
      //aqui se crea el botton y se da estilos al boton encapsulado dentro del shutdown DOM
      shadowRoot.innerHTML =  `
      <style>
        .box, .box2{
            width: 300px;
            height: 200px;
            color: rgb(214, 214, 214);  
            background-color: rgb(0, 0, 20); 
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 2rem;
          
            font-family: 'Montserrat', sans-serif;
            transition: transform 1s;
        }
        .box:hover{
            font-size: 0;
            color: #2abb9b;
            transform: scale(1);
            display:block;
            background-image: url(camioneta.jpg); 
            background-size: 100% 100%;
            font-family: 'Montserrat', sans-serif;
            text-align: bottom;
            margin-top: 2px;
            line-height: 100px;
            vertical-align: text-bottom;
           
         
        }
        .box2:hover{
            font-size: 0;
            color: #2abb9b;
            transform: scale(1);
            display:block;
            background-image: url(mantenimiento.jpg); 
            background-size: 100% 100%;
            font-family: 'Montserrat', sans-serif;
            text-align: bottom;
            margin-top: 2px;
            line-height: 100px;
            vertical-align: text-bottom;
           
         
        }
    
    
        </style> 
        <div class="box">
            Participa y gana una<br> 
            Mazda BT50
         </div>
         <div class="box2">
            Mantemiento con el 50 %<br> 
            de descuento
         </div>
        `;
  
    }
  }
  window.customElements.define('caja-container', CajaContenedor);


  class CajaContenedor2 extends HTMLElement{
    constructor(){
      super();
    }
    connectedCallback(){
      let shadowRoot2 = this.attachShadow({mode:'open'}); // es importante el modo en close no aparece en el HTML
     
      //aqui se crea el botton y se da estilos al boton encapsulado dentro del shutdown DOM
      shadowRoot2.innerHTML =  `
      <style>
        .box2{
            width: 300px;
            height: 200px;
            color: rgb(214, 214, 214);  
            background-color: rgb(0, 0, 20); 
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 2rem;
          
            font-family: 'Montserrat', sans-serif;
            transition: transform 1s;
        }
        .box2:hover{
            font-size: 0;
            color: #2abb9b;
            transform: scale(1);
            display:block;
            background-image: url(mantenimiento.jpg); 
            background-size: 100% 100%;
            font-family: 'Montserrat', sans-serif;
            text-align: bottom;
            margin-top: 2px;
            line-height: 100px;
            vertical-align: text-bottom;
           
         
        }
    
    
        </style> 
         <div class="box2">
            Mantemiento con el 50 %<br> 
            de descuento
         </div>
        `;
  
    }
  }
  window.customElements.define('caja-container2', CajaContenedor2);