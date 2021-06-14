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