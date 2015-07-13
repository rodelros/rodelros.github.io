'use strict';

Array.prototype.clone = function() {
	return this.slice(0);
	};

Array.prototype.last = function(){
	return this[this.length-1];
}
	
var permutation = (function(){
	var items = [], c = 0, limit = 0, 
	permutations = [];
	
	function swap(i,j){
		var tmp = items[i];
		items[i] = items[j];
		items[j] = tmp;
		}
		
	function factorial(n){
		var fact = 1;
		for(var i=1; i<=n; i++){fact *= i;}
		return fact;
		}
	
	function init(arr){
		c = arr.length;
		limit = factorial(c);
		}
	
	function get(){
		var arr=['a','b','c','d'],
		arr1=[],arr2=[],
		line=0,
		str='';
		/*****
		for(var i=0; i<4; i++){
			arr1 = arr.clone();
			arr1.splice(i,1);
			for(var j=0; j<3; j++){
				str = arr[i];
				str += arr1[j];
				arr2=arr1.clone();
				arr2.splice(j,1);
				console.log(++line+': '+str + arr2[0] + arr2[1]);
				console.log(++line+': '+str + arr2[1] + arr2[0]);
				}
			}
		*****/
		var c=arr.length,
		indeces=[];
		while(c>3){
			indeces.push(c--);
			}
		
		
		
		}	
		
	return{
		init:init,
		get:get
		}
	})();
	
//permutation.init(['a','b','c']);
permutation.get();





