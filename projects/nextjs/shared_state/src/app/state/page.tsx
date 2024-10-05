'use client';

import { useState } from "react";
type props = {
    name: string,
    id: number
}

const Panel = ({name, id}: props) => {
    return (
        <div>
            <p>{name} {id}</p>
        </div>
    );
}

export default function State() {
    const [name, setName] = useState('');
    const [id, setId] = useState(0);
    const [num, setNum] = useState(0);

    const handleChange = (e: any) => {
        console.log(typeof e);
        if (e.target.id === 'name') {
            setName(e.target.value);
        } else if (e.target.id === 'id') {
            setId(e.target.value);
        } else if (e.target.id === 'num') {
            setNum(e.target.value);
        }
    }

    return (
        <div>
            <input type="text" id="name" onChange={handleChange}/>
            <br />
            <input type="text" id="id" onChange={handleChange}/>
            <br />
            <input type="text" id="num" onBlur={handleChange} />
            <div>
                <Panel  name={name} id={id} />
                <Panel  name={name} id={id} />
                <Panel  name={name} id={num} />
            </div>
        </div>

    );
}