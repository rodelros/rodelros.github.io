import styles from './dropdown.module.css';
import commonstyles from '../../../header.module.css';

export default function Dropdown() {
    return (
        <div className={`${commonstyles.dropdown} ${styles.dropdown}`}>
            <ul>    
                <li><a href="/">current sales & offers</a></li>
                <li><a href="/">top flight deals</a></li>
            </ul>
        </div>
    );
}