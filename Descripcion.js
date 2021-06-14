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
