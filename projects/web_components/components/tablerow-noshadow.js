(function(d){
	
	const template = d.createElement('template');
	template.innerHTML = `
		<tr> 
			<td></td> <td></td> <td></td> <td></td>
		</tr>
	`;

	window.customElements.define('tablerow-noshadow'
		,class TableRowNoShadow extends HTMLElement{
			constructor(){
				super();
				
				this._data = {
					 elements:{}
					,model:{
						 id:''
						,name: ''
						,role: ''
						,section: ''
					}
				};
				
				this._render();
			}
			
			connectedCallback(){
				this._data.elements = this._getElements();
				this._addEventListeners();
			}
			
			disconnectedCallback(){
				this._removeEventListeners();
			}

			////////////////////
			// private methods
			_render(){
				this.appendChild(template.content.cloneNode(true));
			}
			
			_update(row){
				this._data.elements.name.innerText = row.name;
				this._data.elements.role.innerText = row.role;
				this._data.elements.section.innerText = row.section;
			}
			
			_getElements(){
				let result = {};

				this.getElementsByTagName('td').forEach((td, index) => {
					switch(index){
						case 0: result['id'] = td; break;
						case 1: result['name'] = td; break;
						case 2: result['role'] = td; break;
						case 3: result['section'] = td; break;
					}
				});
				
				return result;
			}
			
			
			///////////////////
			// public methods
			
			
			////////////////////////
			// getters and setters
			get row(){
				return this._data.model;
			}
			
			set row(value){
				this._data.model = value;
				this._update();
			}
		}
	);
})(document);