(function(d){

	const template = d.createElement('template');
	
	template.innerHTML = `
	<style>
		:host{
			display:block;
		}
		:host([hidden]){
			display:none;
		}
	</style>
	
	<button id='btnClose'>Close</button>`;
	
	class ButtonClose extends HTMLElement{
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
			console.log(this.innerHTML);
			
		}
		
		disconnectedCallback(){
			this._removeEventListeners();
		}
		
		//////////////////////
		// private methods
		
		_initializeVariables(){
			this.number = 10;
			this.display = `number is ${this.number}`;
		}
		
		_getElements(){
			let root = this.shadowRoot;
			this.btnClose = root.getElementById('btnClose');
		}
		
		
		_addEventListeners(){
			this.btnClose.addEventListener('click', this._close = evt => {
				console.log(evt.target);
				console.log(this.display);
				this.hide();
			});
		}
		
		_removeEventListeners(){
			this.btnClose.removeEventListener('click', this._close);
		}
		
		_updateContentFromDataAttr(){
			if(this.hasAttribute('data-label')){
				this.btnClose.innerHTML = this.dataset.label;
			}
		}
		
		//////////////////////
		// public methods
		
		show(){
			this.removeAttribute('hidden');
		}
		
		hide(){
			this.setAttribute('hidden', '');
		}
		
	}
	

	window.customElements.define('button-close', ButtonClose);

})(document);