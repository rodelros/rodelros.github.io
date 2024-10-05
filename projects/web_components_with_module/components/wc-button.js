
const template = document.createElement('template')
template.innerHTML = `
    <button>
        Click here!
    </button>
`;

export class WcButton extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));

    }   

    handleEvent = (evt) => {
        alert('what now.');
    };

    addEventListeners = () => {
        const sr = this.shadowRoot;
        sr.querySelector('button').addEventListener('click', this);
    };
    connectedCallback() {    
        this.addEventListeners();
    }

    disconnectedCallback() {
        removeEventListener('click', this);
    }
}

customElements.define('wc-button', WcButton);