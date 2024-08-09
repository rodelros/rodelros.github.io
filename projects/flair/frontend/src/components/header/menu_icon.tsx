export const DownArrow = () => {
    return (
        <svg display="none" xmlns="http://www.w3.org/2000/svg" width="12.828" height="7.828" viewBox="0 0 12.828 7.828">
            <g id="down-arrow" transform="translate(-613.086 -313.086)" fill="none" stroke-linecap="round" stroke-width="2px">
                <path id="Line_1" d="M0 0l5 5" transform="translate(614.5 314.5)"/>
                <path id="Line_2" d="M5 0L0 5" transform="translate(619.5 314.5)"/>
            </g>
        </svg>
    );
}

export const MenuDropdownIcon = () => {
    return (
        <svg width="12.828" height="7.828" version="2.0">
            <use href="#down-arrow" />
        </svg>  
    );
}

