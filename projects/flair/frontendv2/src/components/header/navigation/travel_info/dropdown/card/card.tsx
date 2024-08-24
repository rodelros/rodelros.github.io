import styles from './card.module.css';
import { TravelInfoCard } from '../cards';
import Image from 'next/image';

export default function Card({travelInfoCard}: {travelInfoCard: TravelInfoCard}) {
    return (
        <div className={styles.card}>
            <header>
                <Image
                    src={travelInfoCard.icon}
                    alt={travelInfoCard.header.label}
                    sizes="100vw"
                    width={30}
                    height={27}
                    priority={false}
                />
                <div>{travelInfoCard.header.label}</div>
            </header>
            <ul>
                {travelInfoCard.links.map((l) => 
                    <li key={l.label}>
                        <a href={l.link}>{l.label}</a>
                    </li>)}
            </ul>
        </div>
    );
}