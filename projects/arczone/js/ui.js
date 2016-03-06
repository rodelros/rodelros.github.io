'use strict';

var ui = {};

// preload images
(function(imgs, dir){
	var c = imgs.length,
	image = new Image();

	for (var i = 0; i < c; i++) {
		(function(i){
			image.src = dir + imgs[i];
		})(i);
	}
})(registry.carousel, config.imgDir);



ui.mainView = (function(mainView){
			var current = null;
			
			function hideCurrentView(){
				if(current !== null){
					current.classList.toggle('hidden', true);
				}
			}
			
			function setCurrentView(v){
				if(current === null){
					mainView.appendChild(v);
				} else {
					mainView.replaceChild(v,current);
				}
				current = v;
			}
			
			function showCurrentView(){
				current.classList.toggle('hidden', false);
				
			}
			
			function show(v){
				hideCurrentView();
				setCurrentView(v);
				showCurrentView();
			}
			return{
				show:show
			};
		})(document.getElementById('mainView'));



		
ui.selectorView = (function(selectorView){
	
	(function(){
		var views = selectorView.children,
		i = views.length - 1;
		
		while(i >= 0){
			if(views[i].dataset.view !== undefined){
				views[i].addEventListener('click', function(){
					ui.mainView.show(ui[this.dataset.view].element);
					
				});
			}
			
			i--;
		}
		
	})();
	
	return{
		element: selectorView
	}
})(document.getElementById('selectorView'));




ui.localView = (function (localView) {
	var element = localView;
    return {
		element: localView,
        display: (function (display) {
           
            return {

                show: function (content) {
                    display.innerHTML = content;
                },
				
				clear: function(){
					display.innerHTML = '';
				}
            }
        })(document.getElementById('display')),

        url: function (resource) {
            services.file.get(config.baseDir + resource, ui.localView.display.show);
        }
    }
})(document.getElementById('localView'));



ui.localView.mainNav = (function(mainNav){
            var ul = mainNav.children[0],
                c = ul.children.length,
                //active = null,
				activeSubmenu = null,
				activeTopmenu = null;

            function showPage() {
                var url = config.pagesDir + this.dataset.page;
				hideActiveSubmenu();
				resetTopmenu();
                services.file.get(url, ui.localView.display.show);
            }
			
			function showSubmenu(){
					var submenu = this.children[0];
					hideActiveSubmenu();
					submenu.classList.toggle('hidden', false);
					activeSubmenu = submenu;
			}
			
			function hideActiveSubmenu(){
				if(activeSubmenu !== null){
					activeSubmenu.classList.toggle('hidden', true);
					activeSubmenu = null;
				}
				
			}

			function resetTopmenu() {
                //if (active == null) return;
                //active.classList.remove('activePage');
                //active = null;
				
				if(activeTopmenu !== null){
					activeTopmenu.classList.toggle('activeTopmenu', false);
					activeTopmenu = null;
				}
            }
			
			function setTopmenuHandlers(){
				var menus = ul.children,
				i = menus.length - 1,
				m;
				
				while(i >= 0){
					m = menus[i];
					m.addEventListener('click', setActiveTopmenu, true);
					i--;
				}
			}
			
			function setActiveTopmenu(){
				if(this === activeTopmenu) return;
				
				if(activeTopmenu !== null){
					activeTopmenu.classList.toggle('activeTopmenu', false);
				}

				activeTopmenu = this;
				activeTopmenu.classList.toggle('activeTopmenu', true);
			}
			
			function setHandlers(){
				var items = ul.querySelectorAll('li'), item;
				for(var i = 0, l = items.length; i < l; i++){
					item = items[i];
					if(item.dataset.page !== undefined){
						item.addEventListener('click', showPage, true);
					} else{
						item.addEventListener('click', showSubmenu, true);
						
					}
				}
				
			}
			
			(function(){
				setTopmenuHandlers();
				setHandlers();
			})();

            return {
                hideActiveSubmenu: hideActiveSubmenu,
				resetTopmenu: resetTopmenu
            }	
})(document.getElementById('mainNav'));




ui.localView.page = {
	show: function(menuItem){
				var p = menuItem.dataset.page
				if(p){
					var url = config.pagesDir + p;
					services.file.get(url, ui.localView.display.show);
				} 
			}
};




ui.localView.carousel = (function(carousel){
	
	var imgs = [], index = 0,
	imgEl = carousel.children[0],
	markerEl = carousel.children[1],
	interval;

	function setIndex(i) {
		if (i >= imgs.length) i = 0;
		marker.show(i);
		image.show(i);
		index = i;
	}

	var marker = (function (carouselMarker) {

		var selectedIndex = 0;

		function onClick() {
			if(interval !== undefined) clearInterval(interval);
			if (selectedIndex == this.dataset.index) return;
			setIndex(this.dataset.index);
		}

		function show(i) {
			carouselMarker.children[0].children[selectedIndex].classList.toggle('defaultMarker', true);
			carouselMarker.children[0].children[selectedIndex].classList.toggle('selectedMarker', false);
			
			selectedIndex = i;
			carouselMarker.children[0].children[selectedIndex].classList.toggle('selectedMarker', true);
			carouselMarker.children[0].children[selectedIndex].classList.toggle('defaultMarker', false);
		}

		function init() {
			var c = imgs.length;
			var ul = document.createElement('ul');
			for (var i = 0; i < c; i++) {
				var li = document.createElement('LI');
				li.classList.add('defaultMarker');
				li.innerHTML = '&nbsp;';
				li.dataset.index = i;
				li.addEventListener('click', onClick);
				ul.appendChild(li);
			}
			
			carouselMarker.innerHTML = '';
			carouselMarker.appendChild(ul);
		}

		return {
			show: show,
			init:init
		};
	})(markerEl);

	var image = (function (el) {

		function onTransition() {
			imgEl.classList.toggle('transitionOn', false);
			imgEl.classList.toggle('moveUp', false);
			imgEl.removeChild(imgEl.children[0]);
		}

		var show = function (i) {
			if (imgEl.children.length === 0) {
				imgEl.innerHTML = '<img src=' + imgs[i] + '>';
			}
			else {
				imgEl.innerHTML += '<img src=' + imgs[i] + '>';

				imgEl.classList.toggle('transitionOn', true);
				imgEl.addEventListener('transitionend', onTransition);
				imgEl.classList.toggle('moveUp', true);
			}
		}
		return {
			show:show
		};
	})(imgEl);

	function loadImages() {
		var c = registry.carousel.length;
		for (var i = 0; i < c; i++) {
			imgs[i] = config.imgDir + registry.carousel[i];
		}
	}

	function slide() {
		setIndex(index+1);
	}

	function start() {
		interval = setInterval(slide, 3000);
	}

	(function () {
		loadImages();
		marker.init();
		setIndex(0);
		start();
	})();
	
})(document.getElementById('carousel'));




ui.localView.history = (function(history){
	
	var header = history.children[0],
		ul = history.children[1];

	function onhistoryClick() {
		services.file.get(config.articlesDir + this.dataset.article + '.html', ui.localView.display.show);
	}

	return {

		show: function (entries) {

			var l = entries.length;
			ul.innerHTML = '';
			for(var i = 0; i < l; i++){
				ul.appendChild(document.createElement('li'));
				ul.lastChild.dataset.article = entries[i].article;
				ul.lastChild.innerHTML = '<p>' + entries[i].title + '</p>' +
					'<p>' + entries[i].date + '</p>';
				ul.lastChild.addEventListener('click', onhistoryClick);
			}
		},

		setHeader: function (str) {
			header.innerHTML = str;
		}

	}	
	
})(document.getElementById('history'));




ui.localView.historyNav = (function(historyNav){
	
	var latest = historyNav.children[0],
		older = historyNav.children[1],
		newer = historyNav.children[2],
		pageNumber = 0,
		pageSize = 4,
		pageTotal = registry.articles.length,
		lastPage = Math.floor(pageTotal / pageSize);

	if (pageTotal % pageSize > 0) lastPage++;

	function onOlder() {
		pageNumber++;
		show(getPages());
	}

	function onNewer() {
		pageNumber--;
		show(getPages());
	}

	function onLatest() {
		showLatest();
	}

	function getPages()
	{
		var end = pageSize * pageNumber,
			start = end - pageSize;

		var pages = [];

		
		while (start < end && start < pageTotal) {
			pages.push(registry.articles[start]);
			start++;
		}

		return pages;
	}

	function show(pages) {
		if (pages.length > 0) ui.localView.history.show(pages);
		showHideNav();
	}

	function showHideNav() {

		newer.classList.toggle('hidden', pageNumber === 1);
		older.classList.toggle('hidden', pageNumber === lastPage);
	}

	function showLatest() {
		pageNumber = 1;
		show(getPages());
	}

	latest.addEventListener('click', onLatest);
	older.addEventListener('click', onOlder);
	newer.addEventListener('click', onNewer);

	return {
		showLatest:showLatest
	}	
})(document.getElementById('historyNav'));




ui.internationalView = (function(internationalView){
	internationalView.children[1].addEventListener('click', function(){
		ui.mainView.show(ui.localView.element);
	});
	return{
		element: internationalView
	}
})(document.getElementById('internationalView'));


