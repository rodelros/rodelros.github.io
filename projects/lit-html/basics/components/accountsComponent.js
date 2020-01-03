import {Name} from '../models/name.js';
import {Account} from '../models/account.js';
import {html, render} from '../../node_modules/lit-html/lit-html.js' 
import {repeat} from '../../node_modules/lit-html/directives/repeat.js'

class AccountsComponent{

    _accounts = []

    constructor(element){
        this.element = element;
    }


    set accounts(accounts){
        this._accounts = accounts;
        this.render();
    }

    templates = {
        header: html`<h1>Accounts</h1>`,
        tableHeader: html`<tr>
            <td>#</td>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
        </tr>`,
        tableRows: (accountList) => html`
        ${repeat(accountList, 
            (account) => account.id,
            (account, index) => html`
            <tr>
                <td>${index}</td>
                <td>${account.id}</td>
                <td>${account.firstName}</td>
                <td>${account.lastName}</td>
            </tr>`
        )}`,
        table: (accountList) => html`
        <table>
            ${this.templates.tableHeader}
            ${this.templates.tableRows(accountList)}
        </table>`
    };

    render(){
        render(this.templates.table(this._accounts), this.element);
    }
}

export {AccountsComponent}