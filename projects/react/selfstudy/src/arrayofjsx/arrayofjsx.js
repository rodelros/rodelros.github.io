export default function ArrayOfJsx(){

    let arr = [];
    arr.push(<button>This is a button</button>);
    arr.push(<p></p>);
    arr.push(<span>Inside a span</span>);

    return(
        <>
            {arr}
        </>
    );
}