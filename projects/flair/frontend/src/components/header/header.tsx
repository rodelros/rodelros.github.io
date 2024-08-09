import styles from "./header.module.css";
import Image from "next/image";
import { DownArrow, MenuDropdownIcon } from "./menu_icon";


const FlairLogo = () => {
    return (
        <Image
            src="flair_logo.svg"
            alt="Flair Logo"
            sizes="100vw"
            width={200}
            height={150}
        />
    )
}


const NavigationLinks = () => {
    return (
        <nav className={styles.navigation_links}>

            <DownArrow /> {/* adds a hidden down arrow that is reused by MenuDropdownIcon */}
            <ul>
                <li><a href="/">deals <MenuDropdownIcon /></a></li>
                <li><a href="/">destinations <MenuDropdownIcon /></a></li>
                <li><a href="/">route map</a></li>
                <li><a href="/">travel info <MenuDropdownIcon /></a></li>
                <li><a href="/">optional fees</a></li>
                <li><a href="/">help <MenuDropdownIcon /></a></li>
            </ul>
        </nav>
    )
}

export default function Header() {
    return (
        <header className={styles.container}>
            <a href="/"><FlairLogo /></a>
            <NavigationLinks />
        </header>
    );
}