'use strict';

function Queue(){
	this.fns = [];
	this.delays = [];
	this.args = [];
	this.count = 0;
	this.index = 0;
	}
	
Queue.prototype.add = function(fn,delay,arg){
	this.count = this.fns.push(fn);
	this.delays.push(delay);	
	this.args.push(arg);
	return this;
	}

Queue.prototype.exec = function(){
	var arg = this.args[this.index];
	arg !== undefined ? this.fns[this.index](this.args[this.index]):this.fns[this.index]();
	this.index++;
	this.go();
	}
	
Queue.prototype.go = function(){
	if(this.index < this.count){
		var self = this;
		window.setTimeout(function(){self.exec()},this.delays[this.index]);
		}
	}	

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

console.log('testing event...\n');	
station.subscribe(listener1.consume);
station.publish();
console.log(listener1.get());



function fn1(){
	var str = new Date();
	str += ': '+'fn1';
	console.log(str);
	}
	
var fn2 = function(arg){
	var str = new Date();
	str += ': ' + 'fn2' + ' ' + arg.val;
	console.log(str);
};	

var obj3 = (function(){
	var x = 13;
	function fn3(){
		var str = new Date();
		str += ': ' + 'fn3';
		str += '\nx: ' + x;
		console.log(str);		
		}
	return{
		fn3:fn3
		}
	})();
	
console.log('\ntesting queue...');
console.log(new Date());
var queue = new Queue();
queue.add(fn1,60*500).add(fn2,120*500,{val:5}).add(obj3.fn3,60*500).go();



