import { Account } from "./types";
import { useRef } from "react";

export default function Detail({account, handleAdd, handleUpdate, handleDelete}:{
    account: Account | null,
    handleAdd: (account: Account) => void,
    handleUpdate: (account: Account) => void,
    handleDelete: (account: Account) => void
}){
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

    const onClickUpdate = () => {
        if(ref && ref.current) {
            const nameInput = ref.current.querySelector("input[name=name]") as HTMLInputElement;
            const name = nameInput.value;
            const emailInput = ref.current.querySelector("input[name=email]") as HTMLInputElement;
            const email = emailInput.value;
            handleUpdate({name, id: acct.id, email});
        }
    }

    const onClickDelete = () => {
        if(ref && ref.current) {
            const nameInput = ref.current.querySelector("input[name=name]") as HTMLInputElement;
            nameInput.value = "";
            const emailInput = ref.current.querySelector("input[name=email]") as HTMLInputElement;
            emailInput.value = "";
        }        
        handleDelete(acct);
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
                <button onClick={onClickUpdate}>Update</button>
                <button onClick={onClickDelete}>Delete</button>
            </p>
        </div>
    );

};