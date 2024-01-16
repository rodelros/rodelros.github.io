import { useState } from "react";

let num = 0;

export default function Bind() {
    const [list, setList] = useState(['a', 'b', 'c']);
    const [trigger, setTrigger] = useState(true);

    const addToList = (str) => {
        list.push(str);
    }

    const renderList = list.map((item, index) => <li key={index}>{item}</li>);
    
    const handleClick = () => {
        addToList('ok');
        const t = !trigger;
        num++;
        setTrigger(t);
    }

    
    return (
        <>
            <button onClick={handleClick}>Click</button><br/>
            <ol>{renderList}</ol><br/>
            {trigger.toString()}<br/>
            {num}
        </>
    );
}