import styles from "./header.module.css";
import {MenuDropdownIcon } from "./menu_icon";

type MenuLink = {
    label: string,
    link: string
}
const DropDownMenu = ({label, dropdown}: {label: string, dropdown: JSX.Element}) => {
    return( 
        <div className={styles.menu_dropdown}>
            <a href="/">{label} <MenuDropdownIcon /></a>
            {dropdown}
        </div>);    
}

const DealsMenu = () => {

    const submenu = <menu className={"no_display"}>
        <li><a href="/">current sales and offers</a></li>
        <li><a href="/">top flight deals</a></li>
    </menu>;

    return DropDownMenu({label: "deals", dropdown: submenu});
}

const DestinationsMenu = ({destinations}:{destinations: MenuLink[]}) => {

    const submenu = <menu className={`${"no_display"}`}>
        {destinations.map((destination) => <li key={destination.label}><a href={destination.link}>{destination.label}</a></li>) }
    </menu>;    

    return DropDownMenu({label: "destinations", dropdown:submenu});
}

const TravelInfoMenu = () => {
    return DropDownMenu({label: "travel info", dropdown: <></>});
}

const HelpMenu = ({helpLinks}: {helpLinks: MenuLink[]}) => {

    const submenu = <menu className={`${"no_display"}`}>
        {helpLinks.map((link) => <li key={link.label}><a href={link.link}>{link.label}</a></li>) }
    </menu>;
    return DropDownMenu({label: "help", dropdown: submenu});
}

// fetch this from the backend
const destinations: MenuLink[] = [
    {label: "canada", link: "/"},
    {label: "united states", link: "/"},
    {label: "australia", link: "/"},
    {label: "new zealand", link: "/"},
]

const helpLinks: MenuLink[] = [
    {label: "help centre", link: "/"},
    {label: "manage my booking", link: "/"},
    {label: "flight status", link: "/"},
    {label: "check in now", link: "/"},
    {label: "baggage services", link: "/"},
    {label: "travel advisories", link: "/"},
]

export default function NavigationLinks() {
    return(
    <nav className={styles.navigation_links}>
        <ul>
            <li><DealsMenu /></li>
            <li><DestinationsMenu destinations={destinations}/></li>
            <li><a href="/">route map</a></li>
            <li><TravelInfoMenu /></li>
            <li><a href="/">optional fees</a></li>
            <li><HelpMenu helpLinks={helpLinks}/></li>
        </ul>
    </nav>);
}