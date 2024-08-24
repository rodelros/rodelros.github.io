import styles from './destinations.module.css';
import commonstyles from '../../header.module.css';
import Dropdown from './dropdown/dropdown';
export default function Destinations() {
    return (
        <div className={commonstyles.nav_menu}>
            <a href="/">
                <div>destinations</div>
                <div className={commonstyles.arrow_down}>&#10094;</div>
            </a>
            <Dropdown/>
        </div>
    );
}