'use strict';

function Event(){
	this.listeners = [];
	this.count = 0;
	}
	
Event.prototype.listenerExists = function(fn){
	for(var i=0; i<this.count; i++){
		if(fn===this.listeners[i]) {return true;}
		}
	return false;
	}
	
Event.prototype.subscribe = function(fn){
	if(!this.listenerExists(fn)){this.count = this.listeners.push(fn)};
	}
	
Event.prototype.unsubscribe = function(fn){
	if(this.listenerExists(fn)){
		this.listeners.pop();
		this.count--;
		}
	}
	
Event.prototype.publish = function(arg){
	for(var i=0; i<this.count; i++){
		this.listeners[i](arg);
		}
	}
	
var station = (function(){
	var event = new Event();
	function publish(){
		event.publish({val:5});
		}
		
	function subscribe(fn){
		event.subscribe(fn);
		}
	return{
		publish:publish,
		subscribe:subscribe
		};
	})();
	
var listener1 = (function(){
	var x = 7;
	function consume(arg){
		x += arg.val;
		}
	function get(){
		return x;
		}
	return{
		consume:consume,
		get:get
		};
	})();

station.subscribe(listener1.consume);
station.publish();
console.log(listener1.get());