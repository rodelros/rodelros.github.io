import styles from './extra.module.css';
import Language from '../language/language';
import Login from '../login/login';
import Hamburger from '../hamburger/hamburger';

export default function Extra() {
    return (
        <div className={styles.extra}>
            <Language />
            <Login />
            <Hamburger/>
        </div>
    );
}