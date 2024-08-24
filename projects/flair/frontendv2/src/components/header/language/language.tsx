"use client";
import styles from './language.module.css';
import commonstyles from '../header.module.css';
import Image from 'next/image';
import Dropdown from './dropdown/dropdown';
import { useState } from 'react';


export default function Language() {
    const [isDropdownOpen, setDropDown] = useState(false);

    const handleClick = () => {
        setDropDown(!isDropdownOpen);
    }

    return (
        <div className={styles.language}>
            <button onClick={handleClick}>
                <Image
                    src="globe.svg"
                    alt="language"
                    sizes="100vw"
                    width={24}
                    height={24}
                    priority={true}
                />
                <div>EN</div>
                <div className={commonstyles.arrow_down}>&#10094;</div>
            </button>
            {isDropdownOpen && Dropdown()}

        </div>
    );
}