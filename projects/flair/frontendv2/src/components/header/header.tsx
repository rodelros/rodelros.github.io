import styles from './header.module.css';
import Logo from './logo/logo';
import Login from './login/login';
import Navigation from './navigation/navigation';
import Language from './language/language';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            <Language />
            <Login />
        </header>
    );
}