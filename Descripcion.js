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