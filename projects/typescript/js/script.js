"use strict";
const displayInit = () => {
    const d = document.getElementById("display");
    if (d == null)
        return;
    return {
        clear: () => d.innerHTML = "",
        show: (s) => d.innerHTML = s,
        append: (s) => d.innerHTML += '<br>' + s
    };
};
const display = displayInit();
