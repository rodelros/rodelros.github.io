class AccountInfo extends HTMLElement{
	constructor(){
		super();
	}
	
	template = `Some account info`;
	connectedCallback(){
		let temp = document.createElement('div');
		temp.innerHTML = this.template;
		this.appendChild(temp);
	}
}

customElements.define('account-info', AccountInfo);