
const template = document.createElement('template')
template.innerHTML = `
    <button onclick="alert('Hello World!')">
        Click here!
    </button>
`;

export class WcButton extends HTMLElement {
    constructor() {
        super();
    }   

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));
        
    }
}

customElements.define('wc-button', WcButton);