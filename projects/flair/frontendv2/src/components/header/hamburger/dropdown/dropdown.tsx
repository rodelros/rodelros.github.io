import styles from './dropdown.module.css';

export default function Dropdown() {
    return (
        <div className={styles.dropdown}>
            <a href="#">deals</a>
            <a href="#">destinations</a>
            <a href="#">route map</a>
            <a href="#">travel info</a> 
            <a href="#">optional fees</a>
            <a href="#">help</a>
        </div>
    );
}