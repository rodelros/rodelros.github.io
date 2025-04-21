'use strict';
const OVERLAY = 'overlay';

const overlayStyle = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
	
	overflow-y: auto;
	padding: 5px;
  
    align-items: center;
    justify-content: center;
`;

const dialogStyle = `
    border: none;
    background-color: white;   
    padding: 4px; 
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
`;

let overlay = null;

const showModal = (el) => {

    if(!el) return;

    // If the overlay doesn't exist yet, create it.
    if(!overlay){
        
        // Create the overlay.
        overlay = document.createElement('div');
        overlay.setAttribute('style', overlayStyle);

        // Create the dialog that will contain the element.
        const dlg = document.createElement('dialog');
        dlg.setAttribute('style', dialogStyle);
        dlg.addEventListener('click', dlgClick);

        // The dialog element is added as a child of the overlay.
        overlay.appendChild(dlg);

        // When the overlay is clicked, close the modal.
        //overlay.addEventListener('click', close);

        document.body.appendChild(overlay); 
    }

    // If the overlay already exists, just add the child element to the dialog then show it.
    // Note that the only child of the overlay is the dialog element.
    const dlg = overlay.firstChild;
    if(dlg.firstChild) dlg.removeChild(dlg.firstChild);
    dlg.appendChild(el);

    // The function to close the overlay and the dialog is being passed to the child element.
    // This way the child element can call the function to close the overlay and the dialog.
    el.closeDialog = closeByChild;
    

    overlay.style.display = 'grid';
    dlg.showModal();

}

const dlgClick = (evt) => {
    if(evt.target !== overlay.firstChild) return;
    close();
}

const closeByChild = () => {
    if(!overlay) return;
    close();
}

const close = () => {
    const dlg = overlay.firstChild;
    dlg.close();
    if(dlg.firstChild) dlg.removeChild(dlg.firstChild);    
    overlay.style.display = 'none';
}


export {showModal, close};