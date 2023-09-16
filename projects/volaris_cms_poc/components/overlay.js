(function(d){
    const template = d.createElement('template');

    template.innerHTML=`
        <style>
            :host {
                display: block;
            }
        </style>

        <section>
        
        </section>
    `;

    class EditOverlay extends HTMLElement {
        
    }

    window.customElements.define('edit-overlay', EditOverlay);
})(document);