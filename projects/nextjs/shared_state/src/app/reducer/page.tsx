'use client';
import { useReducer, useRef, useState } from "react";

type Action = {
    type: "add" | "edit" | "delete" | "select";
    payload: Account;
};

type Account = {
    name: string;
    id: number;
    email: string;
};

function accountReducer(accounts: Account[], action: Action):Account[] {
    switch (action.type) {
        case "add":
            return [...accounts, {name:action.payload.name, id:accounts.length+1, email:action.payload.email}];
        case "edit":
            return accounts.map((account) => {
                if (account.id === action.payload.id) {
                    return action.payload;
                } else {
                    return account;
                }
            });
        case "delete":
            return accounts.filter((account) => account.id !== action.payload.id);
        default:
            throw new Error();
    }
}

const AccountList = ({ accounts,handleSelect }: 
    { 
        accounts: Account[],  
        handleSelect: (id: number) => void
    }) => {
        console.debug(accounts);
    return (
        <ul>
            {accounts.map((account) => (
                <li onClick={() => handleSelect(account.id)} key={account.id}>
                    {account.name} - {account.email}
                </li>
            ))}
        </ul>
    );
}

const Detail = ({account, handleAdd, handleUpdate, handleDelete}: 
    {
        account: Account | null,
        handleAdd: (account: Account) => void,
        handleUpdate: (account: Account) => void,
        handleDelete: (account: Account) => void
    }) => {
        const ref = useRef<HTMLFormElement>(null);
        
        const onClickAdd = () => {
            if(ref && ref.current) {
                const nameInput = ref.current.querySelector("input[name=name]") as HTMLInputElement;
                const name = nameInput.value;
                const emailInput = ref.current.querySelector("input[name=email]") as HTMLInputElement;
                const email = emailInput.value;

                handleAdd({name, id: -1, email});
            }
        }

        const acct = account || {name: "", id: -1, email: ""};
        return (
            
            <div>
                <form id="detail" ref={ref}>
                    <p>ID : {acct.id}</p>
                    Name: <input type="text" name="name" defaultValue={acct.name}/><br />
                    Email: <input type="text" name="email" defaultValue={acct.email}/><br />
                </form>
                <p>
                    <button onClick={onClickAdd}>Add</button>
                    <button onClick={() => handleUpdate(acct)}>Update</button>
                    <button onClick={() => handleDelete(acct)}>Delete</button>
                </p>
            </div>
        );
};



export default function Reducer() {

    const [accounts, dispatch] = useReducer(accountReducer, []);
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
            <Detail key={selectedId} account={getAccountById(selectedId)} handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete} />
            <AccountList accounts={accounts} handleSelect={handleSelect}/>
        </div>
    );
}