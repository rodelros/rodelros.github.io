
const staticComponent = (heading: string) => {
    return(
        <>
            <h1>{heading}</h1>
        </>
    );
};

function Element({label}: {label: string}) {
    return (
      <h1>{label}</h1>  
    );
}

export default function DescribingTheUI() {

    const heading = 'This is the heading';

    return (
        
        <main>
            DescribingTheUI
            {staticComponent(heading)}
            <Element label="This is the element."/>
        </main>
        
    );
}