(function(d){

	const template = d.createElement('template');
	
	template.innerHTML = `
		<style>
			:host{
				display: block;
			}

		</style>
		<div>Status: <span id='txtStatus'></span></div>
	`;
	
	
	// atomic components are component building blocks
	// that does not depend on other components
	class AtomicComponent extends HTMLElement{
		constructor(){
			super();
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
			
			this._initializeVariables();
			this._getElements();
		}

		connectedCallback(){
			this._addEventListeners();
			this._updateContentFromDataAttr();
		}
		
		disconnectedCallback(){
			this._removeEventListeners();
		}
		
		//////////////////////
		// private methods
		
		_initializeVariables(){

		}
		
		_getElements(){
			let root = this.shadowRoot;
			this.txtStatus = root.getElementById('txtStatus');
		}
		
		
		_addEventListeners(){

		}
		
		_removeEventListeners(){

		}
		
		_updateContentFromDataAttr(){
			if(this.hasAttribute('data-status')){
				this.txtStatus.innerText = this.dataset.status;
			}
		}
		
		
		//////////////////////
		// getters and setters
		get status(){
			return this.hasAttribute('data-status') ? this.dataset.status : '';
		}
		
		set status(val){
			this.setAttribute('data-status', val);
			this._updateContentFromDataAttr();
		}
		
		
		//////////////////////
		// public methods
		
	}
	
	window.customElements.define('atomic-component', AtomicComponent);

})(document);