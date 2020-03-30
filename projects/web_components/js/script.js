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
	include('components/button-close.js');
	include('components/modal-component.js');
	include('components/atomic-component.js');
	include('components/child-component.js');
	include('components/sub-component.js');
	include('components/parent-component.js');
})();