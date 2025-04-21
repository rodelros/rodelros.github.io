
const template = document.createElement('template')
template.innerHTML =
`
<style>
    :host {
 
    }

    .container {

    }
</style>

<section class="container" slot="content">
    <ul>
        <li>Any element can be used as a slot.</li>
        <li>Any element can be used as a slot.</li>
        <li>Any element can be used as a slot.</li>
    </ul>
</section>

`;

export class WcContent extends HTMLElement {
    constructor() {
        super().attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}


customElements.define('wc-content', WcContent)

export default WcContent;