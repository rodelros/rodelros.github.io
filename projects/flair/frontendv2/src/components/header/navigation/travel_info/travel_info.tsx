import styles from './travel_info.module.css';
import commonstyles from '../../header.module.css';
import Dropdown from './dropdown/dropdown';
export default function OptionalFees() {
    return (
        <div className={commonstyles.nav_menu}>
            <a href="/">
                <div>travel info</div>
                <div className={commonstyles.arrow_down}>&#10094;</div>
            </a>
            <Dropdown/>
        </div>
    );
}