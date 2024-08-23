import styles from './destinations.module.css';
import commonstyles from '../../header.module.css';
export default function Destinations() {
    return (
        <div className={styles.destinations}>
            <a className={`${"no_txt_decor"} ${commonstyles.nav_menu}`} href="/">
                <div>destinations</div>
                <div className={commonstyles.arrow_down}>&#10094;</div>
            </a>
        </div>
    );
}