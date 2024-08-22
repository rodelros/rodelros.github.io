import styles from "./header.module.css";
import {MenuDropdownIcon } from "./menu_icon";
import { MenuLink, Section } from "./types";
import TravelInfoDropdown from "./travel_info_dropdown/dropdown";
import {travelInfoDropdownSections} from "./travel_info_dropdown/sections";
import { Destinations } from "./destinations";

const DropDownMenu = ({label, dropdown}: {label: string, dropdown: JSX.Element}) => {
    return( 
        <div className={styles.menu_dropdown}>
            <a href="/">{label} <MenuDropdownIcon /></a>
            {dropdown}
        </div>);    
}

const NavMenuLink = ({label, links}: {label: string, links: MenuLink[]}) => {
    const submenu = <menu className={"no_display"}>
        {links.map((link) => <li key={link.label}><a href={link.link}>{link.label}</a></li>) }
    </menu>;

    return DropDownMenu({label: label, dropdown: submenu});
}

// fetch this from the backend
const sections =travelInfoDropdownSections;

const TravelInfoMenu = () => {
    return DropDownMenu({label: "travel info", dropdown: <TravelInfoDropdown sections={sections}/>});
}

// fetch these from the backend

const helpLinks: MenuLink[] = [
    {label: "help centre", link: "/"},
    {label: "manage my booking", link: "/"},
    {label: "flight status", link: "/"},
    {label: "check in now", link: "/"},
    {label: "baggage services", link: "/"},
    {label: "travel advisories", link: "/"},
]

const deals: MenuLink[] = [
    {label: "current sales & offers", link: "/"},
    {label: "top flights", link: "/"},
]

export default function NavigationLinks() {
    return(
    <nav className={styles.navigation_links}>
        <ul>
            <li><NavMenuLink label="deals" links={deals}/></li>
            <li><NavMenuLink label="destinations" links={Destinations}/></li>
            <li><a href="/">route map</a></li>
            <li><TravelInfoMenu /></li>
            <li><a href="/">optional fees</a></li>
            <li><NavMenuLink label="help" links={helpLinks}/></li>
        </ul>
    </nav>);
}