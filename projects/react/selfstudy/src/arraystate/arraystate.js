import { useState, useRef } from "react"


const Adder = ({onAddClick}) => {
    const textInput = useRef('');
    
    function onClick(){
        const valueToAdd = textInput.current.value;
        textInput.current.value = '';
        onAddClick(valueToAdd);
    }

    return( 
    <>
        <input ref={textInput} type="text"></input>
        <button onClick={onClick}>Add</button>
    </>)
};

const Display = ({arr}) => {
    const listItems = arr.map(item => <li key={item}>{item}</li>);

    return( 
    <ul>
        {listItems}
    </ul>)
};

export default function ArrayState() {
    const [arr, setArr] = useState([]);

    function onAddClick(valueToAdd){
        arr.push(valueToAdd);
        setArr(arr.slice());
    }

    return(
    <>
        <Adder onAddClick={onAddClick}></Adder>
        <p></p>
        <Display arr={arr}></Display>
    </>)
}