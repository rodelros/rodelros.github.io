'use client';
import { useReducer, useRef, useState } from "react";
import {Account } from "./types";
import Detail from "./detail";
import AccountList from "./accountlist";
import AccountReducer from "./accountreducer";



export default function Reducer() {

    const [accounts, dispatch] = useReducer(AccountReducer, []);
    const [selectedId, setSelectedId] = useState(-1);

    const getAccountById = (id: number) => {
        return accounts.find((account) => account.id === id) ?? null;
    }
    const handleSelect = (id:number) => {
  
        const account = getAccountById(id);
        if (account) {
            setSelectedId(id);
        }
    }

    const handleAdd = (account: Account) => {
        dispatch({type: "add", payload: account});
    }
    const handleUpdate = (account: Account) => {
        dispatch({type: "edit", payload: account});
    }
    const handleDelete = (account: Account) => {  
        dispatch({type: "delete", payload: account});
    }



    return (
        <div>
            
            <Detail key={selectedId} 
                account={getAccountById(selectedId)} 
                handleAdd={handleAdd} 
                handleUpdate={handleUpdate} 
                handleDelete={handleDelete} />

            <AccountList accounts={accounts} handleSelect={handleSelect}/>
        </div>
    );
}