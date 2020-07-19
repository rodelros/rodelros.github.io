'use strict';

let _worker = (function(){
	let w;
	let load = jsFile => {
		if(window.Worker){
			w = new Worker(jsFile);
		}
	};
	let unload = () => {
		w.terminate();
		w = undefined;
	};
	
	return{
		load: load
		,unload: unload
	}
})();


let _table = function(id){
	let tbl = document.getElementById(id);
	let rowIds = [];
	
	function headers(fields){
		
		let row;
		if(tbl.querySelector('th')){
			
			row = tbl.querySelector('th').parentElement;
			let ths = row.querySelectorAll('th');
			let i = ths.length - 1;
			
			while(i >= 0){
				ths[i].remove();
				i--;
			}

		} else {
			let thead = document.createElement('thead');
			row = document.createElement('tr');
			thead.appendChild(row);
			tbl.appendChild(thead);
			
		}
		
		let th;
		fields.forEach(f => {
			th = document.createElement('th');
			th.innerText = f;
			row.appendChild(th);
		});

	}
	
	function row(fields){
		
		let tbody = tbl.querySelector('tbody');
		if(!tbody){
			tbody = tbl.appendChild(document.createElement('tbody'));
		}
		
		let rows = tbody.querySelectorAll('tr');
		let row = id => {
			
			let c = rows.length;
			for(let i = 0; i < c; i++){
				if(rows[i].data && rows[i].data.id === id){
					return rows[i];
				}
			}
			
			return null;
		};
		
		if(fields.id){
			let tr = row(fields.id);
	
			if(tr){
				tr.children[1].innerText = fields.name;
				tr.children[2].innerText = fields.account;
			} else {
				tr = document.createElement('tr');
				tr.innerHTML = `<td>${fields.id}</td> <td>${fields.name}</td> <td>${fields.account}</td>`;
				tr.data = {id:fields.id};
				tbody.appendChild(tr);			
			}
			
			tr.data.name = fields.name;
			tr.data.account = fields.account;
			return tr;
		}
	}
	
	function rows(){
		return tbl.querySelector('tbody').querySelectorAll('tr');
	}
	
	return{
		 headers: headers
		,row: row
		,rows: rows
	}
	
};

let _editor = (function(){
	
	let dlgEdit = document.getElementById('dlgEdit');
	let txtId = document.getElementById('txtId');
	let txtName = document.getElementById('txtName');
	let txtAccount = document.getElementById('txtAccount');
	let btnOk = document.getElementById('btnOk');
	let data = {};
	
	btnOk.addEventListener('click', evt => {
		data.id = txtId.innerText;
		data.name = txtName.value;
		data.account = txtAccount.value;
		hide();
	});
	
	function init(row){
		let data = row.data;
		
		txtId.innerText = data.id;
		txtName.value = data.name;
		txtAccount.value = data.account
		
		show();
	}
	
	function show(){
		dlgEdit.classList.remove('hidden');
	}
	
	function hide(){
		dlgEdit.classList.add('hidden');
	}
	
	return{
		 init: init
		,show: show
		,hide: hide
		,data: data
		,btnOk: btnOk
	};
})();

let _eventMediator = function(tbl, editor){

	
	function onClick(evt){
		editor.init(evt.currentTarget);
	}
	
	function onOk(evt){
		tbl.row(editor.data);
	}
	
	function setup(){
		tbl.rows().forEach(r => r.addEventListener('click', onClick));
		editor.btnOk.addEventListener('click', onOk);
	}
	
	function detach(){
		tbl.rows().forEach(r => r.removeEventListener('click', onClick));
		edito.btnOk.removeEventListener('click', onOk);
	}
	
	return{
		 setup: setup
		,detach: detach
	}
};

(function(d){
	let w;
	let btnLoadWorker = d.getElementById('btnLoadWorker');
	btnLoadWorker.addEventListener('click', evt => {
		w = _worker.load('main_worker.js'); 
	});
	
	let btnLoadTable = d.getElementById('btnLoadTable');
	btnLoadTable.addEventListener('click', evt => {
		
		var tblLinks = _table('tblLinks');
		tblLinks.headers(['one', 'two', 'account']);
		tblLinks.headers(['ID', 'name', 'account']);
		tblLinks.row({id:'654736', name:'rodel', account:'gmail'});
		tblLinks.row({id:'654737', name:'rodel', account:'gmail'});
		tblLinks.row({id:'654736', name:'ros', account:'gmail'});
		tblLinks.row({id:'654336', name:'Juan', account:'netflix'});
		tblLinks.row({id:'652736', name:'Peter', account:'reddit'});
		
		let eventMediator = _eventMediator(tblLinks, _editor);
		eventMediator.setup();
	});
	
})(document);

