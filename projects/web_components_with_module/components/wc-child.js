
const template = document.createElement('template')
template.innerHTML =
`<details>
    <summary>
        <slot name="summary">Default summary</slot>
    </summary>
    <p>
        <slot name="content">default content</slot>
    </p>
</details>`;


customElements.define('wc-child', class extends HTMLElement {
    constructor() {
        super().attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
})