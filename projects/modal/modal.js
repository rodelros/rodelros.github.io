'use strict';
const OVERLAY = 'overlay';

const showModal = (el) => {

    if(!el) return;

    let overlay = document.getElementById(OVERLAY);

    // If the overlay doesn't exist yet, create it.
    if(!overlay){
        
        // Create the overlay.
        overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');
        overlay.setAttribute('style', `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
  
            align-items: center;
            justify-content: center;
        `);

        // Create the dialog that will contain the element.
        const dlg = document.createElement('dialog');
        dlg.setAttribute('style', `
            border: none;
            background-color: white;   
            padding: 4px; 
            border-radius: 4px;
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
        `);

        // The dialog element is added as a child of the overlay.
        overlay.appendChild(dlg);

        // When the overlay is clicked, close the modal.
        overlay.addEventListener('click', handleClick);

        document.body.appendChild(overlay); 
    }

    // If the overlay already exists, just add the child element to the dialog then show it.
    // Note that the only child of the overlay is the dialog element.
    const dlg = overlay.firstChild;
    dlg.appendChild(el);

    overlay.style.display = 'grid';
    dlg.setAttribute('open', 'open');

}

const handleClick = (event) => {
    if(event.target.id === OVERLAY) {
        disableOverlay();
    }
}

const disableOverlay = () => {
    const overlay = document.getElementById(OVERLAY);
    if(!overlay) return;

    const dlg = overlay.firstChild;
    dlg.removeAttribute('open');
    dlg.removeChild(dlg.firstChild);  
    
    overlay.style.display = 'none';

}