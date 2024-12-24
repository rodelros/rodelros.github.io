type Action = {
    type: "add" | "edit" | "delete" | "select";
    payload: Account;
};

type Account = {
    name: string;
    id: number;
    email: string;
};

export type {Action, Account};