import styles from './dropdown.module.css';
export default function Dropdown() {
    return (
        <nav className={styles.dropdown}>
            <li>english</li>
            <li>français-ca</li>
        </nav>
    );
}