(function(d){
	
	const templates = (function(){
		
		const table = d.createElement('template');
		table.innerHTML = `
			<table>
				<thead>
					<tr>
						<th>ID</th> <th>Name</th> <th>Role</th> <th>Section</th>
					</tr>
				</thead>
				
				<tbody>
					<!-- Insert rows here -->
				</tbody>
			</table>
			<button class="btnShow">Show</button>`;
			
			
		const row = d.createElement('template');
		row.innerHTML = `
			<tr> 
				<td></td> <td></td> <td></td> <td></td>
			</tr>`;
		
		return {
			table: table,
			row: row
		};
	})();
	
	
	class TableNoShadow extends HTMLElement{
		
		constructor(){
			super();
						
			this._data = {
				 elements:{}
				,model:{
					 rows:[]
					,strDisplay: ''
				}
			};
			
			this._rowIndexById =  id => {
				let index = this._data.model.rows.findIndex(r => { r.id === id });
				if(index !== -1){
					return this._data.model.row[index];
				} else {
					return null;
				}				
			};
			
			this._updateRowElement = (element,row) => {
				element.children[0].innerText = row.id;
				element.children[1].innerText = row.name;
				element.children[2].innerText = row.role;
				element.children[3].innerText = row.section;
 			};
			
			this._rowOperations = {
				 add: row => {
					 
					 // append the element
					this._data.elements.tableBody.appendChild(templates.row.content.cloneNode(true));
					row.element = this._data.elements.tableBody.lastElementChild;
					this._updateRowElement(row.element, row);
					this._data.model.rows.push(row);
				 }
				,update: row => {
					let rowElement = row.element;
					if(!rowElement){
						let index = this._rowIndexById(row.id);
						rowElement = this._data.model.rows[index];
					}
					
					this._updateRowElement(rowElement, row);
				}
				,remove: row => {
					let index = this._data.model.rows.findIndex(r => { r.id === row.id });
					if(index !== -1){
						this._data.elements.tableBody.removeChild(row.element);
						this._data.model.rows.splice(index,1);						
					}
				}
				,whereId: id => {
					let index = this._data.model.rows.findIndex(r => { r.id === id });
					if(index !== -1){
						return this._data.model.row[index];
					} else {
						return null;
					}					
				}
			};
			
			this._render();
		}
		
		connectedCallback(){
			this._data.elements = this._getElements();
			this._addEventListeners();
			this._updateDataFromAttr();
		}
		
		disconnectedCallback(){
			this._removeEventListeners();
		}
		
		////////////////////
		// private methods
		
		_render(){
			this.appendChild(templates.table.content.cloneNode(true));
		}
		
		_getElements(){
			return {
				 btnShow: this.getElementsByClassName('btnShow')[0]
				,tableBody: this.getElementsByTagName('tbody')[0]
			}
		}
		
		_addEventListeners(){
			this._data.elements.btnShow.addEventListener('click', this._onBtnShow = evt => {
				console.log(this._data.model.strDisplay);
			});
		}
		
		_removeEventListeners(){
			this._data.elements.btnShow.removeEventListener('click', this._onBtnShow);
		}
		
		_updateDataFromAttr(){
			if(this.hasAttribute('data-value')){
				this._data.model.strDisplay = this.getAttribute('data-value');
			}
		}
		
		
		///////////////////
		// public methods

		
		////////////////////////
		// getters and setters
		get rows(){
			return this._rowOperations;
		}
		
	}
	
	window.customElements.define('table-noshadow', TableNoShadow);

})(document);