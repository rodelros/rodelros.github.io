'use strict';

var services = {

    file: (function () {

        var _cache = {},
            _f = null,
            _url = '';

        function load() {
            var oReq = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            oReq.addEventListener("load", onload);
            oReq.open('GET', _url);
            oReq.send();
        }

        function onload() {
            _cache[_url] = this.response;
            _f(this.response);
        }

        return {

            get: function (url, f) {

                if (_cache[url]) {
                    f(_cache[url]);
                } else {
                    _url = url;
                    _f = f;
                    load();
                }
            }
        }

    })()

};
