"use client";
import styles from './hamburger.module.css';
import Dropdown from './dropdown/dropdown';
import { useState } from 'react';

export default function Hamburger() {
    const [isDropdownOpen, setDropDown] = useState(false);

    const handleClick = () => {
        setDropDown(!isDropdownOpen);
    }

    return (
        <div className={styles.hamburger}>
            <button onClick={handleClick}>&#9776;</button>
            {isDropdownOpen && Dropdown()}
        </div>
        
    );
}