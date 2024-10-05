import { Account, Action } from "./types";
export default function AccountReducer(accounts: Account[], action: Action):Account[] {
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