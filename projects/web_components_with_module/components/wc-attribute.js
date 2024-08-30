const template = document.createElement('template')
template.innerHTML =
`<div>Attribute</div>`;


customElements.define('wc-attribute', class extends HTMLElement {
    constructor() {
        super().attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
})