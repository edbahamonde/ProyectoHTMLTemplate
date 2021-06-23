class Caracteristicas extends HTMLElement{
    constructor(){
      super();
    }
    
    connectedCallback(){
      let shadowRoot = this.attachShadow({mode: 'open'});
      const tem = document.querySelector('#Caracteristicas');
      const instance = tem.content.cloneNode(true);
      shadowRoot.appendChild(instance);
    }
  }
  
  window.customElements.define('section-caracteristicas', Caracteristicas);

  // miguel
  class tiposVehiculo extends HTMLElement{
    constructor(){
      super();
    }
    connectedCallback(){
      let shadowRoot = this.attachShadow({mode:'open'});
      const t= document.querySelector('#view-car');
      //constante a clonar
      const instance=t.content.cloneNode(true); // se esta clonando todo el template de HTML con todos sus elementos hijos
      shadowRoot.appendChild(instance);  //se añade este clone como hijo del shadowRoot  
    }
  }
  window.customElements.define('miguel-castillo', tiposVehiculo);

  //Dayan
  class Header extends HTMLElement{
    constructor(){
      super();
    }
    
    connectedCallback(){
      let shadowRoot = this.attachShadow({mode: 'open'});
      const tem = document.querySelector('#header');
      const instance = tem.content.cloneNode(true);
      shadowRoot.appendChild(instance);
    }
  }
  
  window.customElements.define('section-header', Header);
//Joel
class Content extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    let shadowRoot = this.attachShadow({mode: 'open'});
    const tem = document.querySelector('#content');
    const instance = tem.content.cloneNode(true);
    shadowRoot.appendChild(instance);
  }
}

window.customElements.define('section-content', Content);
  //Yomar

  class Footer extends HTMLElement{
    constructor(){
      super();
    }
    
    connectedCallback(){
      let shadowRoot = this.attachShadow({mode: 'open'});
      const tem = document.querySelector('#Footer');
      const instance = tem.content.cloneNode(true);
      shadowRoot.appendChild(instance);
    }
  }
  
  window.customElements.define('section-footer', Footer);


  class Slider extends HTMLElement{
    constructor(){
      super();
    }
    
    connectedCallback(){
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML=`
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <style>
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .slider{
        position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
      margin-top: 20px;
      
    }
    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 38px;
        color: white;
        width: 182px;
        height: 150px;
      }
    .slider ul{
        display: flex;
        animation: cambio 20s infinite linear;
        width: 400%;
        height: 100%;
    
    }
    .slider li{
        width: 100%;
        list-style: none;
    }
    .slider img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0px -180px;
    }
    @keyframes cambio{
        0%{margin-left: 0;}
        20%{margin-left: 0;}
        
        25%{margin-left: -100%;}
        45%{margin-left: -100%;}
        
        50%{margin-left: -200%;}
        70%{margin-left: -200%;}
        
        75%{margin-left: -300%;}
        100%{margin-left: -300%;}
    }

    #logo{
        object-position: center;
    }
    @media only screen and (min-width:320px) and (max-width:768px){
    .slider, .slider ul, .slider img{
        height: 100vh;
    }
    }
    
      </style>
      <div class="slider">
    <ul id="lista">
        <li>
            <img src="images/carro1.jpg">
            <div class="center">
                <img id="logo" src="images/mazda_logo.png" alt="">
            </div>
        </li>
        <li>
            <img src="images/carro2.jpg">
          
        </li>
        <li>
            <img src="images/carro3.jpg">
           
        </li>
        <li>
            <img src="images/carro4.jpg">
            
        </li>
      
    </ul>
    <button id="botonizquierdo" class="w3-button w3-black w3-display-left" >&#10094;</button>
    <button id="botonderecho" class="w3-button w3-black w3-display-right" >&#10095;</button>

</div>
      `;
    }
  }
  
  window.customElements.define('slider-element', Slider);