import styles from './dropdown.module.css';
import commonstyles from '../../../header.module.css';
import { MenuLink } from '../../types';


const helpLinks:MenuLink[] = [
    {label: "help centre", link: "/"},
    {label: "manage my booking", link: "/"},
    {label: "flight status", link: "/"},
    {label: "check in now", link: "/"},
    {label: "baggage service", link: "/"},
    {label: "travel advisories", link: "/"},
]

export default function Dropdown() {
    return (
        <div className={`${commonstyles.dropdown} ${styles.dropdown}`}>    
            <ul>    
                {helpLinks.map((d) => (
                    <li key={d.label}>
                        <a href={d.link}>{d.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}