

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}


export default function SelectLayout({ 
    children,
    base,
    chile,
    argentina
}: { 
    children: React.ReactNode;
    base: React.ReactNode;
    chile: React.ReactNode;
    argentina: React.ReactNode;
}) {

    const random = getRandomInt(2);
    

    return (
        <div>
            /*** Select Layout to show different pages, can be used for AB testing ***/
            { random === 0 ? base : random === 1 ? chile : argentina }
        </div>
    );
}