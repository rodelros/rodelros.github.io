import styles from './dropdown.module.css';
import commonstyles from '../../../header.module.css';
import {Destinations} from './destinations';

export default function Dropdown() {
    return (
        <div className={`${commonstyles.dropdown} ${styles.dropdown}`}>    
            <ul>
                {Destinations.map((d) => (
                    <li key={d.label}>
                        <a href={d.link}>{d.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}