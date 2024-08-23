import styles from './travel_info.module.css';
import commonstyles from '../../header.module.css';
export default function OptionalFees() {
    return (
        <div className={styles.travel_info}>
            <a className={`${"no_txt_decor"} ${commonstyles.nav_menu}`} href="/">
                <div>travel info</div>
                <div className={commonstyles.arrow_down}>&#10094;</div>
            </a>
        </div>
    );
}