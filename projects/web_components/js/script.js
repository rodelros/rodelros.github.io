'use strict';

function include(file){
	let d = document;
	let script = d.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	script.defer = true;
	d.getElementsByTagName('head')[0].appendChild(script);
}

function el(id){
	return document.getElementById(id);
}

(function(){
	include('components/account-info.js');
	include('components/account-display.js');
	include('components/modal-dialog.js');
	include('js/show_welcome.js');
})();