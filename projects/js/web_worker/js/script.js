'use strict';

(function(){
    let _worker;


    function initWorker(){
        if(window.Worker){
            if(typeof(_worker) == 'undefined'){
               // _worker = new Worker('js/cache_worker.js');
            }
            
            setEvents();
            console.log(document.domain);

        } else {
            console.log('Web worker not supported.');
            alert('Web worker not supported.');
        }
    }

    function setEvents(){

        let d = document;
        let count = d.getElementById('count');
        let btnAdd = d.getElementById('btnAdd');


        let btnAddData = d.getElementById('btnAddData');
        let txtData = d.getElementById('txtData');

        btnAddData.addEventListener('click',
        (ev)=>{
            document.domain += ':' + txtData.value;
        });

        //_worker.onmessage = (event) => {
        //    count.innerText = event.data.count;
        //};
    }
    initWorker();
})();