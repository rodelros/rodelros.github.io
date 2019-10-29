'use strict';

var modalContainer = (function(d){
    var el = d.getElementById('modalContainer');
    var modalDialog = d.getElementById('modalDialog');
    var modalContent = d.getElementById('modalContent');
    var modalTitle = d.getElementById('modalTitle');
    var btnCloseModal = d.getElementById('btnCloseModal');
    var modalElement = null;
    const HIDDEN = 'hidden';

    //set eventlisteners
    el.addEventListener('click', (ev) => {
        Close();
    });

    btnCloseModal.addEventListener('click', (ev)=> {
        Close();
        ev.stopPropagation();
    });

    modalDialog.addEventListener('click', (ev) =>{
        ev.stopPropagation();
    });

    function Close(){
        modalTitle.innerText = '';
        modalElement.classList.add(HIDDEN);
        modalContent.removeChild(modalElement);
        el.classList.add(HIDDEN);
    }

    function Show(element, title){
        modalElement = element;
        element.classList.remove(HIDDEN);
        modalTitle.innerText = title;
        modalContent.appendChild(element);
        el.classList.remove(HIDDEN);
    }

    return {
        show:function(element, title){
            Show(element, title);
        }
    }
})(document);

(function(){
    let btnShowModal = document.getElementById('btnShowModal');
    let selectionModal = document.getElementById('selectionModal');
    btnShowModal.addEventListener('click', (ev)=> {
        modalContainer.show(selectionModal, 'Modal title');
    });

})();
