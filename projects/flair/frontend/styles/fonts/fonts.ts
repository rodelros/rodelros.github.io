import localFont from "next/font/local";

const Averta = localFont({
    src: [ 
        {path: "./averta/Averta-Regular.woff2", weight: "400", style: "normal"},
        {path: "./averta/Averta-Bold.woff2", weight: "700", style: "normal"},
        {path: "./averta/Averta-Black.woff2", weight: "900", style: "normal"},
        {path: "./averta/Averta-SemiBold.woff2", weight: "300", style: "normal"},
    ]
    ,variable : "--font-averta" 
});

export {Averta};