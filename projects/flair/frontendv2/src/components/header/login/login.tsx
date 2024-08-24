"use client";
import styles from './login.module.css';
import Image from 'next/image';
import { useState } from 'react';
 
const Dropdown = () => {
    return (
        <div>
        <button>sign in</button>
        </div>    
    )        
}

export default function Login() {
    const [isDropdownOpen, setDropDown] = useState(false);

    const handleClick = () => {
        setDropDown(!isDropdownOpen);
    }

    return (
        <div className={styles.login}>
            <Image onClick={handleClick}
                src="user.svg"
                alt="login"
                sizes="100vw"
                width={40}
                height={40}
            />

            {isDropdownOpen && Dropdown()}
        </div>
    );
}