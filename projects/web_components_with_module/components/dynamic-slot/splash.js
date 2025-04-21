
const template = document.createElement('template')
template.innerHTML =
`
<style>
    :host {
        
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow-y: auto;

            background-color: rgba(0, 0, 0, 0.5);
            z-index: 5;

            display: grid;
            align-items: center;
            justify-content: center;  
    }
</style>
<div id="btnClose">x</div>
<slot name="content"></slot>
`;


customElements.define('wc-splash', class extends HTMLElement {
    constructor() {
        super().attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
})