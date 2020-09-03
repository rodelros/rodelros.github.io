(function(d){

	const template = d.createElement('template');
	
	template.innerHTML = `
		<style>
			:host{
				display: flex;
				align-items: center;
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0px;
				top: 0px;
				z-index: 100;
				background-color: rgba(159,162,153,0.5);
			}
			:host([hidden]){
				display: none;
			}
			:host-context(div){
				font-weight: ;
			}
		</style>
		<div>
			<div>
				<header id="modalHeader"></header>
				<div id="modalContent"></div>
				<div id="modalMenu">
					<button id="btnOk">Ok</button>
					<button id="btnCancel">Cancel</button>
				</div>
			</div>
		</div>
	`;
	
	class ModalComponent extends HTMLElement{
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
			this._updateContentFromInnerHTML();
			
			
			// start hidden
			this.close();
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
			this.modalHeader = root.getElementById('modalHeader');
			this.modalContent = root.getElementById('modalContent');
			this.modalMenu = root.getElementById('modalMenu');
			this.btnOk = root.getElementById('btnOk');
			this.btnCancel = root.getElementById('btnCancel');
		}
		
		
		_addEventListeners(){
			this.btnOk.addEventListener('click', this.onok = evt =>{
				
			});
			
			this.btnCancel.addEventListener('click', this.oncancel= evt =>{
				
			});
		}
		
		_removeEventListeners(){
			this.btnOk.removeEventListener('click', this.onok);
			this.btnCancel.removeEventListener('click', this.oncancel);
		}
		
		_updateContentFromDataAttr(){
			if(this.hasAttribute('data-label')){
				this.modalHeader.innerText = this.dataset.label;
			}
		}
		
		_updateContentFromInnerHTML(){

			
		}
		
		//////////////////////
		// public methods
		
		open(){
			this.removeAttribute('hidden');
		}
		
		close(){
			this.setAttribute('hidden', '');
		}
		
		/////////////////////
		// getters and setters
		
	}
	
	window.customElements.define('modal-component', ModalComponent);

})(document);