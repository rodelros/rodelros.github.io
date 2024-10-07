const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: grid;
            align-items: center;
            justify-content: center;
            max-height: 100%;
            overflow-y: auto;
        }
    </style>

    <section class="container">
        <p>This is inside a web component.</p>
    </section>

`;

customElements.define('wc-signup', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));        
    }
});