'use strict';

var ajax = (function(){



	function stringify(arg){
		var data = '';
		for(var prop in arg){
			if(arg.hasOwnProperty(prop)){
				data += prop + '=' + arg[prop] + '&'
			}
		}

		return data.substring(0,data.length-1);

	}

  //arg:
  // url
  // data
  // func
	function post(arg){
		var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
				arg.func(xmlhttp.responseText);
			}
		};
		xmlhttp.open("POST",arg.url,true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    (arg.data !== undefined && arg.data !== null)?
		xmlhttp.send(stringify(arg.data)) : xmlhttp.send();
	}

  //arg:
  // url
  // data
  // func
  // (opt) responseType
  function get(arg){
		var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState==4 && xmlhttp.status==200){
        arg.func(xmlhttp.response);
      }
    };

    if(arg.responseType !== undefined && arg.responseType !== null) xmlhttp.responseType = arg.responseType;
    if(arg.data !== undefined && arg.data !== null) arg.url += '?' + stringify(arg.data);

    xmlhttp.open("GET", arg.url, true);
    xmlhttp.send();
  }

	return{
		post:post,
    get:get
	};
})();
