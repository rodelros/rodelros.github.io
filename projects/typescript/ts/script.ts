const displayInit = () => {
    const d = document.getElementById("display");
    if(d == null) return;
    
    return{
         clear: () => d.innerHTML = ""
        ,show: (s: string) => d.innerHTML = s
        ,append: (s: string) => d.innerHTML += '<br>' + s
    };
};

const display = displayInit();