import styles from './deals.module.css';
import commonstyles from '../../header.module.css';
import Dropdown from './dropdown/dropdown';

export default function Deals() {
    return (
        <div className={`${"relative"} ${styles.deals}`}>
            <a className={`${"no_txt_decor"} ${commonstyles.nav_menu}`}>
                <div>deals</div>
                <div className={commonstyles.arrow_down}>&#10094;</div>
            </a>
            <Dropdown />
        </div>
    );
}