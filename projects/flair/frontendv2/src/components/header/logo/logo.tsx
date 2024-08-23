import styles from './logo.module.css';
import Image from 'next/image';    
export default function Logo() {
    return (
        <Image
            src="flair_logo.svg"
            alt="Flair Logo"
            sizes="100vw"
            width={150}
            height={66}
            priority={true}
        />
    );
}