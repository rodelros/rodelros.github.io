class AccountDisplay extends HTMLElement{
	constructor(){
		super();
	}
		
	setEventListeners(){
		alert('nothing here');
		
	}
	
	connectedCallback(){
		let template = document.createElement('div');
		template.innerHTML = `
		<account-info></account-info>
		<button>This is the account-display button</button>`;
		this.appendChild(template);
		
		// set event listeners
		this.children[0].children[0].addEventListener('click', env => {
			alert('what');
		});
	}
	
	disconnectedCallback(){
		console.log('account-display removed from page');
	}
	
	adoptedCallback(){
		console.log('account-display moved to a new page');
	}
	
	attributeChangeCallback(name, oldValue, newValue){
		console.log(`attribute ${name} changed from ${oldValue} to ${newValue}`);
	}
	

};

customElements.define('account-display', AccountDisplay);
