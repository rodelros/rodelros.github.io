import styles from './header.module.css';
import Logo from './logo/logo';
import Extra from './extra/extra';
import Navigation from './navigation/navigation';
import Hamburger from './hamburger/hamburger';


export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            <Extra />
        </header>
    );
}