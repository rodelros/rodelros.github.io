import styles from './optional_fees.module.css';
import commonstyles from '../../header.module.css';
export default function OptionalFees() {
    return (
        <div className={styles.optional_fees}>
            <a className={`${"no_txt_decor"} ${commonstyles.nav_menu}`} href="/">optional fees</a>
        </div>
    );
}