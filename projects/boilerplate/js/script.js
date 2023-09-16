'use strict';

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
