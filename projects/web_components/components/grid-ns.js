(function(){

(rowTemplate = document.createElement('template')).innerHTML = 
`<tr> <td></td> <td></td> <td></td> </tr>`;

class GridRow{
	constructor(param){		
		this.node = rowTemplate.content.cloneNode(true);
		this._elements = this._getElements();
		this.update(param);
	}
	

	///////////////////
	// private methods
	
	
	_getElements(){
		
		let tds = this.node.querySelectorAll('td');
		
		return{
			 id: tds[0]
			,name: tds[1]
			,role: tds[2]
		};
	}
	

	//////////////////
	// public methods

	update(row){
		this.id = row.id ? row.id : '';
		this.name = row.name ? row.name : '';
		this.role = row.role ? row.role : '';
	}	
	
	///////////////////////
	// getters and setters	
	get name(){
		return this._elements.name.innerText;
	}
	
	set name(value){
		this._elements.name.innerText = value;
	}
	
	get id(){
		return this._elements.id.innerText;
	}
	
	set id(value){
		this._elements.id.innerText = value;
	}
	
	get role(){
		return this._elements.role.innerText;
	}
	
	set role(value){
		this._elements.role.innerText = value;
	}
	
}


const row = (function(){
		
	let tr = r => {
		let elem = document.createElement('tr');
		elem.innerHTML = `<tr>  <td>${r.id}</td>  <td>${r.name}</td>  <td>${r.role}</td> </tr>`;
		return elem;
	};
	
	let setProps = (subElems, prop) => {
		
	};
	
	return{
		 newNode: r => {
			let elem = tr(r);
			return elem;
		}
		,update: (elem,row) => {
			
		}
		,remove: row => {
			
		}
	}
})();


(gridTemplate = document.createElement('template')).innerHTML = 
`<table>
	<thead>
		<tr>  <th>ID</th>  <th>Name</th>  <th>Role</th>  </tr>
	</thead>
	<tbody> <!-- insert GridRows here -->  </tbody>
</table>`;

class Grid extends HTMLElement{
	constructor(){
		super();
		
		/////////////////
		// public fields
		
		this.rows = [];
		
		this._render();
		this._elements = this._getElements();
	}

	connectedCallback(){
		//this._elements = this._getElements();
		this._addEventListeners();
	}
	
	disconnectedCallback(){
		this._removeEventListeners();
	}
	
	///////////////////
	// private methods
	
	_getElements(){
		return{
			tableBody: this.getElementsByTagName('tbody')[0]
		};
	}
	
	_render(){
		this.appendChild(gridTemplate.content.cloneNode(true));
	}
	
	_addEventListeners(){
		
	}
	
	_removeEventListeners(){
		
	}
	

	//////////////////
	// public methods
	
	addRow(row){
		let gridRow = new GridRow(row);
		
		row['element'] = gridRow;
		this.rows.push(row);
		this._elements.tableBody.appendChild(gridRow.node);
	}
	
	updateRow(row){
		let r = this.rowById(row.id);
		if(r !== -1){
			r.element.update(row);
		}
	}
	
	deleteRow(row){
		let r = this.rowById(row.id);
		if(r !== -1){
			document.remove(r.element);
			this.rows.splice(r, 1);
		}
	}
	
	rowById(id){
		let i = this.rows.findIndex(r => r.id === id);
		return i !== -1 ? this.rows[i] : null;
	}
	
	///////////////////////
	// getters and setters
	
}

window.customElements.define('grid-ns', Grid);
})();