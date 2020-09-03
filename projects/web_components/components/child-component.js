(function(d){

	const template = d.createElement('template');
	
	template.innerHTML = `
	<style>
		display: block;
	</style>
	<div id="list">
	</div>
	
	`;
	
	
	
	class ChildComponent extends HTMLElement{
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
			this._items = [];
		}
		
		_getElements(){
			let root = this.shadowRoot;
			this.list = root.getElementById('list');
		}
		
		
		_addEventListeners(){

		}
		
		_removeEventListeners(){

		}
		
		_updateContentFromDataAttr(){

		}
		
		//////////////////////
		// public methods
		
		//////////////////////
		// getters and setters
		
		set items(arrItems){
			this._items = arrItems;
			
			// clear the list items
			while(this.list.firstChild){this.list.removeChild(this.list.firstChild)};
			
			this._items.forEach(item => {
				// reuse the template variable
				template.innerHTML = `<div>${item}</div>`;
				this.list.appendChild(template.content.cloneNode(true));
			});
		
		}
		
		
		get items(){
			return this._items;
		}
		
	}
	
	window.customElements.define('child-component', ChildComponent);

})(document);