import styles from './help.module.css';
import commonstyles from '../../header.module.css';
export default function Deals() {
    return (
        <div className={styles.deals}>
            <a className={`${"no_txt_decor"} ${commonstyles.nav_menu}`} href="/">
                <div>help</div>
                <div className={commonstyles.arrow_down}>&#10094;</div>
            </a>
        </div>
    );
}