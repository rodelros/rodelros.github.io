'use strict';

var config = {
  baseurl : '../../rodelros.github.io/'
};

var month = {
  '01':'Jan',
  '02':'Feb',
  '03':'Mar',
  '04':'Apr',
  '05':'May',
  '06':'Jun',
  '07':'Jul',
  '08':'Aug',
  '09':'Sep',
  '10':'Oct',
  '11':'Nov',
  '12':'Dec'
};

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

	/*****
  arg:
   url
   data
   func
   (opt) responseType
	*****/
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
    get:get
	};
})();

var entry = function(d){
  var el = d.getElementById('entry'),
  cache = {};

  function show(i){
    if(ui.registryMax < i) return;

    var entry = registry[i];
    ui.registryIndex = i;
    if(cache[entry] === undefined){

      var url = config.baseurl + 'entries/' + entry + '.html';

      ui.load(url,el,function(){

        ui.prevnext.updateControl();
        cache[entry] = el.children[0];

      })

    } else {

      el.removeChild(el.children[0]);
      el.appendChild(cache[entry]);
      ui.prevnext.updateControl();

    }
  }

  return{
    show:show
  }
}

var prevnext = function(d){
  var el = d.getElementById('prevnext'),
  prev = el.children[0],
  next = el.children[1],
  obj = {};

  // events
  prev.addEventListener('click', function(){
      if(ui.registryIndex === 0) return;
      ui.entry.show(ui.registryIndex-1);
  });

  next.addEventListener('click', function(){
    if(ui.registryMax === ui.registryIndex) return;
    ui.entry.show(ui.registryIndex+1);
  });

  function updateControl(){
    if(ui.registryIndex === 0){
      prev.style.visibility = 'hidden';
      next.style.visibility = '';
    } else if(ui.registryIndex === ui.registryMax){
      next.style.visibility = 'hidden';
      prev.style.visibility = '';
    } else {
      next.style.visibility = '';
      prev.style.visibility = '';
    }
  }

  obj.updateControl = updateControl;

  return obj;
}

var slidemenu = function(d){

  var el = d.getElementById('slidemenu'),
  menu = el.children[0],
  ul = el.children[1],
  obj = {};

  function load(){
    registry.sort();
    var l = ui.registryMax,
    yy='', mm='', dd='', yr='', el=null;

    for(var i=0;i <=l; i++){

      yy = registry[i].substr(0,4);
      mm = registry[i].substr(4,2);
      dd = registry[i].substr(6,2);

      if(yy !== yr){
        yr = yy;
        el = d.createElement('li');
        el.className = 'year';
        el.innerHTML = yy;
        ul.appendChild(el);
      }

      el = d.createElement('li');
      el.className = 'entry';
      el.innerHTML = month[mm] + ' ' + dd;
      //el.setAttribute('data-url', registry[i] + '.html');
      el.setAttribute('data-index', i);

      ul.appendChild(el);
      el.onclick = function(){
        ui.entry.show(parseInt(this.getAttribute('data-index')));

      };


    }
  }

  obj.load = load;

  return obj;

}

var ui = (function(d){

  var obj = {}, registryIndex = 0,
  registryMax = registry.length - 1;

	function load(url,element,callback){
		ajax.get({
			url:url,
			func:function(response){
				element.innerHTML = response;
        callback();
			}
		});
	}

  obj.load = load;
  obj.prevnext = prevnext(d);
  obj.entry = entry(d);
  obj.slidemenu = slidemenu(d);
  obj.registryIndex = registryIndex;
  obj.registryMax = registryMax;

	return obj;
})(document);

(function(){
  ui.slidemenu.load();
  ui.entry.show(0);
})();
