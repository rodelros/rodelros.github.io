(function(d){

	const template = d.createElement('template');
	
	template.innerHTML = `
	<style>
		:host{
			display:block;
			border: 1px solid lightblue;
		}
	</style>
	<div>
		<div>Sub component</div>
		<atomic-component id='statusInfo'></atomic-component>
		<label for="description"></label>
		<input type="text" name="description" id="txtDescription" value="">
		<button id="btnSetDescription">Set</button>
	</div>
	`;
	
	
	
	class SubComponent extends HTMLElement{
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
			
			this.statusInfo.status = 'Ongoing';
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
			this.statusInfo = root.getElementById('statusInfo');
			this.txtDescription = root.getElementById('txtDescription');
			this.btnSetDescription = root.getElementById('btnSetDescription');		
		}
		
		
		_addEventListeners(){
			this.btnSetDescription.addEventListener('click', this.setDescription = evt => {
				this.dispatchEvent(new CustomEvent('description',{detail:this.txtDescription.value}));
			});
		}
		
		_removeEventListeners(){
			this.btnSetDescription.removeEventListener('click', this.setDescription);
		}
		
		_updateContentFromDataAttr(){

		}
		
		
		//////////////////////
		// getters and setters
		get description(){
			return this.txtDescription.value;
		}
		
		set description(val){
			this.txtDescription.value = val;
		}
		
		//////////////////////
		// public methods
		
	}
	
	window.customElements.define('sub-component', SubComponent);

})(document);