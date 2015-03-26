'use strict';

var ui = (function(d){

	var transform = (function(){
		var style = document.body.style;
		if(style.transform !== undefined) return 'transform';
		if(style.webkitTransform !== undefined) return 'webkitTransform';
		if(style.MozTransform !== undefined) return 'MozTransform';
		if(style.msTransform !== undefined) return 'msTransform';
		if(style.OTransform !== undefined) return 'OTransform';
	})();
	
	function translate(el, x, y){
		el.style[transform] = 'translate('+x + 'px,' + y + 'px)';
		el.translateX = x;
		el.translateY = y;
	} 

	var compositeImg = d.getElementById('compositeImg');
	
	//-----------
	// extensions
	//-----------
	compositeImg.children[0].__proto__._translate = function(x,y){
		this.style[transform] = 'translate('+x + 'px,' + y + 'px)';
		this.translateX = x;
		this.translateY = y;
	};
	
	compositeImg.children[0].__proto__._initTranslate = function(x, y, limitDeltaX, limitDeltaY, ratioX, ratioY){
		this.initTranslateX = x;
		this.initTranslateY = y;
		this.minX = x - limitDeltaX;
		this.maxX = x + limitDeltaX;
		this.minY = y - limitDeltaY;
		this.maxY = y + limitDeltaX;
		this.ratioX = ratioX;
		this.ratioY = ratioY;
		
		this._translate(x,y);
	}
	
	compositeImg.children[0].__proto__._move = function(dX, dY){
		var x = this.translateX + dX/this.ratioX;
		var y = this.translateY + dY/this.ratioY;
		x = x < this.minX ? this.minX : (x > this.maxX ? this.maxX : x);
		y = y < this.minY ? this.minY : (y > this.maxY ? this.maxY : y);
		this._translate(x,y);
	}
	
	compositeImg.sky = compositeImg.children[0];
	compositeImg.beach = compositeImg.children[1];
	compositeImg.frontRock = compositeImg.children[5];
	compositeImg.rightRock = compositeImg.children[4];
	compositeImg.smallRock = compositeImg.children[3];
	compositeImg.foliage = compositeImg.children[2];
	
	//----------------
	// initializations
	//----------------
	compositeImg.sky._initTranslate(-5, 5, 270, 1000, 50, 50);
	compositeImg.beach._initTranslate(-5, -20, 270, 1000, 50, 50);
	compositeImg.rightRock._initTranslate(1110, -1455, 270, 1000, 50, 50);
	compositeImg.frontRock._initTranslate(802, -1650, 500, 500, 10, 10);
	compositeImg.smallRock._initTranslate(545, -1563, 200, 50, 70, 70);
	compositeImg.foliage._initTranslate(245, -945, 100, 100, 100, 100);
	
	compositeImg.className = 'visible';
	
	compositeImg.prevMouseX = compositeImg.prevMouseY = compositeImg.MouseX = compositeImg.MouseY = 0;
	compositeImg.saveMousePos = function(evt){
		compositeImg.mouseX = evt.clientX;
		compositeImg.mouseY = evt.clientY;
	};
	compositeImg.start = function(){
		compositeImg.loopId = setInterval(compositeImg.render,20);
	}
	compositeImg.stop = function(){
		clearInterval(compositeImg.loopId);
	}
	compositeImg.render = function(){
		var diffX = compositeImg.mouseX - compositeImg.prevMouseX;
		var diffY = compositeImg.mouseY - compositeImg.prevMouseY;
		compositeImg.prevMouseX = compositeImg.mouseX;
		compositeImg.prevMouseY = compositeImg.mouseY;
		
		compositeImg.sky._move(-diffX, -diffY);
		compositeImg.beach._move(-diffX, -diffY);
		compositeImg.rightRock._move(-diffX, -diffY);
		compositeImg.frontRock._move(-diffX, -diffY);
		compositeImg.smallRock._move(-diffX, -diffY);
		compositeImg.foliage._move(-diffX, -diffY);
	}
	compositeImg.addEventListener('mousemove', compositeImg.saveMousePos);
	compositeImg.addEventListener('mouseover', compositeImg.start);
	compositeImg.addEventListener('mouseout', compositeImg.stop);

	
})(document);