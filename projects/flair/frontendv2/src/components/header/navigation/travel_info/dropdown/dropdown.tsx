import styles from './dropdown.module.css';
import commonstyles from '../../../header.module.css';
import Card from './card/card'
import {Cards} from './cards'

export default function Dropdown() {
    return (
        <div className={`${commonstyles.dropdown} ${styles.dropdown}`}>    
            <div className={styles.cards}>
                {Cards.map((c) => <Card key={c.header.label} travelInfoCard={c} />) }
            </div>
        </div>
    );
}