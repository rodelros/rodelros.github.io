(function(d){

	const template = d.createElement('template');
	
	template.innerHTML = `
	<style>
		:host{
			display:block;
			border: 1px solid lightgray;
		}
	</style>
	<atomic-component data-status="Delayed"></atomic-component>
	<div>
		<span>From the parent</span>
		<label for="description"></label>
		<input type="text" name="description" id="txtDescription" value="">
		<button id="btnSetDescription">Set</button>
	</div>
	<sub-component id="subComponent"></sub-component>`;
	
	
	
	class ParentComponent extends HTMLElement{
		constructor(){
			super();
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
			
			this._initializeVariables();
			this._getElements();
		}

		connectedCallback(){
			this._addEventListeners();
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
			this.subComponent = root.getElementById('subComponent');
			this.txtDescription = root.getElementById('txtDescription');
			this.btnSetDescription = root.getElementById('btnSetDescription');
		}
		
		
		_addEventListeners(){
			this.btnSetDescription.addEventListener('click', this.setDescription = evt =>{
				this.subComponent.description = this.txtDescription.value;
			});
			
			this.subComponent.addEventListener('description', this.ondescription = data => {
				this.txtDescription.value = data.detail;
			});
		}
		
		_removeEventListeners(){
			this.subComponent.removeEventListener('description', this.ondescription);
			this.btnSetDescription.removeEventListener('click', this.setDescription);
		}
		
		
		//////////////////////
		// public methods
		
	}
	
	window.customElements.define('parent-component', ParentComponent);

})(document);