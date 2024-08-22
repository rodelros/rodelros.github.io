import styles from "./dropdown.module.css";
import { Section } from "../types";

const SectionElement = ({section}: {section: Section}) => {
    return (
        <div className={styles.section}>
            <div className={styles.section_header}>
                {section.icon} 
                <a href={section.header.link}>{section.header.label}</a>
            </div>
            <div className={styles.links}>
                {section.links.map((link) => <a key={link.label} href={link.link}>{link.label}</a>)}
            </div>  
        </div>
    );
}


export default function TravelInfoDropdown({sections}: {sections: Section[]}) {

    return(
        <div className={`${styles.container} ${"no_display"}`}>
            <div className={`${styles.dropdown}`}>
                {sections.map((s) => <SectionElement key={s.header.label} section={s} />)}
            </div>
        </div>
    );
}