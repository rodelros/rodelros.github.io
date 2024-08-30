import { Account } from "./types";
export default function AccountList({ accounts, handleSelect }: { accounts: Account[], handleSelect: (id: number) => void }) {
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