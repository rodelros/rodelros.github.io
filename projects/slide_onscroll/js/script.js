'use strict';

var ui = (function(d){
	var slide = d.getElementById('slide');
	function showSlide(evt){
		if(evt.pageY > 130){
			slide.classList.add('slide_full');
			slide.classList.remove('slide_minimized');
		}
		else{
			slide.classList.remove('slide_full');
			slide.classList.add('slide_minimized');
		}
	}
	window.addEventListener('scroll', showSlide)
	
	
})(document);