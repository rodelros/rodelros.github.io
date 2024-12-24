const template = document.createElement('template')
template.innerHTML =
`<div>Attribute-
    <span id="data-value">Default</span>
    <div id="data-content">Content</div>
    <div>
        <div id="data-inner">Inner content</div>
    </div>
</div>`;


customElements.define('wc-attribute', class extends HTMLElement {
    static observedAttributes = ['data-value'];
    
    // private properties
    /////////////////////
    #elements;

    // private methods
    //////////////////

    #getElementsWithId = () => {
        const els = this.shadowRoot.querySelectorAll('*');
        let elementsWithId = new Map();
        els.forEach(el => {
            if(el.hasAttribute('id')){
                elementsWithId.set(el.id, el);
            }
        })

        return elementsWithId;
    };

    // public properties
    /////////////////////

    get content(){
        return this.#elements.get('data-content').textContent;
    }

    set content(val){
        this.#elements.get('data-content').textContent = val;
    }


    constructor() {
        super().attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.#elements = this.#getElementsWithId();
    }

    connectedCallback() {

    }

    attributeChangedCallback(name, oldValue, newValue) {
        let el = this.#elements.get(name);
        if(el){
            el.textContent = newValue;
        }
        
    }
})