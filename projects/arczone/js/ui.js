'use strict';



var ui = (function (d) {

    return {

        mainNav: (function (el) {

            var ul = el.children[0],
                c = ul.children.length,
                active = null;

            function setActive(p) {
                if (active != null) {
                    active.classList.remove('activePage');
                }

                active = p;
                p.classList.add('activePage');
            }

            function showPage(p) {
                var url = config.pagesDir + p.dataset.page;
                services.file.get(url, ui.display.show);
            }

            function onClick() {
                if (this === active) return;
                setActive(this);
                showPage(this);
            }

            for (var i = 0; i < c ; i++) {
                ul.children[i].addEventListener('click',onClick);
            }
             
            function clear() {
                if (active == null) return;
                active.classList.remove('activePage');
                active = null;
            }

            return {
                clear:clear
            }
        })(d.getElementById('mainNav')),

        preloadImages: function () {

            var c = registry.carousel.length,
            image = new Image();

            for (var i = 0; i < c; i++) {
                image.src = config.imgDir + registry.carousel[i];
            }
        },

        carousel: (function (el) {

            var imgs = [], index = 0,
                imgEl = el.children[0],
                markerEl = el.children[1],
                interval;

            function setIndex(i) {
                if (i >= imgs.length) i = 0;
                marker.show(i);
                image.show(i);
                index = i;
            }

            var marker = (function (el) {

                var selectedIndex = 0;

                function onClick() {
                    if(interval !== undefined) clearInterval(interval);
                    if (selectedIndex == this.dataset.index) return;
                    setIndex(this.dataset.index);
                }

                function show(i) {
                    el.children[0].children[selectedIndex].classList.toggle('defaultMarker', true);
                    el.children[0].children[selectedIndex].classList.toggle('selectedMarker', false);
                    selectedIndex = i;
                    el.children[0].children[selectedIndex].classList.toggle('selectedMarker', true);
                    el.children[0].children[selectedIndex].classList.toggle('defaultMarker', false);
                }

                function init() {
                    var c = imgs.length;
                    var ul = d.createElement('ul');
                    for (var i = 0; i < c; i++) {
                        var li = d.createElement('LI');
                        li.classList.add('defaultMarker');
                        li.innerHTML = '&nbsp;';
                        li.dataset.index = i;
                        li.addEventListener('click', onClick);
                        ul.appendChild(li);
                    }
                    
                    el.innerHTML = '';
                    el.appendChild(ul);
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

        })(d.getElementById('carousel')),

        history: (function (el) {

            var header = el.children[0],
                ul = el.children[1];

            function onhistoryClick() {
                ui.mainNav.clear();
                services.file.get(config.articlesDir + this.dataset.article + '.html', ui.display.show);
            }

            return {

                show: function (entries) {

                    var l = entries.length;
                    ul.innerHTML = '';
                    for(var i = 0; i < l; i++){
                        ul.appendChild(d.createElement('li'));
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
        })(d.getElementById('history')),

        historyNav: (function (el) {
            var latest = el.children[0],
                older = el.children[1],
                newer = el.children[2],
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

                //if (start < pageTotal) {
                    while (start < end && start < pageTotal) {
                        pages.push(registry.articles[start]);
                        start++;
                    }
                //}

                return pages;
            }

            function show(pages) {
                if (pages.length > 0) ui.history.show(pages);
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
        })(d.getElementById('historyNav')),

        display: (function (el) {
           
            return {

                show: function (content) {
                    el.innerHTML = content;
                }
            }
        })(d.getElementById('display')),

        url: function (link) {
            services.file.get(config.baseDir + link, ui.display.show);
        }
    }
})(document);
