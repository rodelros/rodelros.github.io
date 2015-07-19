'use strict';

var nav = (function(d){
  var el = d.getElementById('nav'),
  loaded = false;

  function load(){
    if(loaded) return;
    ui.load('../jit_spa/components/nav.html',el);
    loaded = true;
  }

  return{
    load:load
  }

})(document);
