(function(){
	
	const template = document.createElement('template');
	template.innerHTML = `
	<style>
		:host{
			display: flex;
			justify-content: center;
			width: 100%;
			height: 100%;
			visibility: hidden;
		}
		:host(.container){
			padding: 2rem;
		}
		:host(.header){
			
		}
		:host(.content){
			
		}
		:host(.buttons){
			
		}
		:host(.footer){
			
		}
	</style>
	
	<div>
		<div class="container">
			<header class="header"><!-- label or any header content --></header>
			<div class="content"><!-- content element here --></div>
			<div class="buttons">
				<button id="btnOk">Ok</button>
				<button id="btnCancel">Cancel</button>
				<button id="btnClose">Close</button>
			</div>
			<footer class="footer"><!-- any note or special announcement --></footer>
		</div>
	</div>`;
	
	class Dialog extends HTMLElement{
		constructor(){
			super();
			//this.label = '';
			
			this.attachShadow({mode: 'open'});
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
		
		set label(value){
			//this.label = value;
		}
		
		
		connectedCallback(){
			
			this.shadowRoot
			.getElementById('btnOk')
			.addEventListener('click', (evt) => {
				this.close();
			});
			
			this.shadowRoot
			.getElementById('btnCancel')
			.addEventListener('click', (evt) => {
				this.close();
			});
			
			this.shadowRoot
			.getElementById('btnClose')
			.addEventListener('click', (evt) => {
				this.close();
			});
		}
		
		disconnectedCallback(){
			
		}
		
		show(){		
			this.style.visibility = 'visible';
		}
		
		close(){
			this.style.visibility = 'hidden';
		}
		
	}
	
	customElements.define('modal-dialog', Dialog);
})();