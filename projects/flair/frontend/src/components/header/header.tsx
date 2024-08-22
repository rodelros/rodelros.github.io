import styles from "./header.module.css";
import Image from "next/image";
import { DownArrow, MenuDropdownIcon } from "./menu_icon";
import NavigationLinks from "./navigation_links";


const FlairLogo = () => {
    return (
        <Image
            src="flair_logo.svg"
            alt="Flair Logo"
            sizes="100vw"
            width={150}
            height={150}
            priority={true}
        />
    )
}

const Globe = () => {
    return (
        <Image
            src="globe.svg"
            alt="globe"
            sizes="100vw"
            width={24}
            height={24}
            />
    )   
}

const LanguageDropdown = () => {
    return <div>
        <button className={styles.language_button}>
            <Globe />
            <span id="txtLanguage">EN <MenuDropdownIcon /></span>  
        </button>
        
    </div>
}

const UserIcon = () => {
    return (
        <Image
            src="user.svg"
            alt="user"
            sizes="100vw"
            width={40}
            height={40}
            />
    )      
}

const LogInDropdown = () => {
    return <div>
        <button className={styles.log_in_button}>
            <UserIcon />
        </button>
    </div>
}



const ExtraDropdown = () => {
    return <div className={styles.extra_dropdown}>
        <LanguageDropdown />
        <LogInDropdown />
    </div>
}
export default function Header() {
    return (
        <>

        {/* 
            adds a hidden down arrow that is reused by MenuDropdownIcon element.
            NavigationLinks and ExtraDropdown use it. 
        */}
        <DownArrow />

        <header className={styles.main_header}>
            <a href="/"><FlairLogo /></a>
            <NavigationLinks />
            <ExtraDropdown />
        </header>
        </>
    );
}