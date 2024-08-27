import './wc-child.js';

customElements.define('wc-parent', class extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `<div>parent</div>`;

        // create child
        const child = document.createElement('wc-child');
        child.innerHTML = `<span slot="summary">This is from the parent component.</span>`;
        child.innerHTML += `
            <ul slot="content">
                <li>Any element can be used as a slot.</li>
            </ul>`;
        shadow.appendChild(child);
    }
})