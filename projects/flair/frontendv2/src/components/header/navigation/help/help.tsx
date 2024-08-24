import styles from './help.module.css';
import commonstyles from '../../header.module.css';
import Dropdown from './dropdown/dropdown';
export default function Deals() {
    return (
        <div className={commonstyles.nav_menu}>
            <a href="/">
                <div>help</div>
                <div className={commonstyles.arrow_down}>&#10094;</div>
            </a>
            <Dropdown/>
        </div>
    );
}