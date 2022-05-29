import React from 'react';
import Logo from "../images/logo.png";
import styles from './Navbar.module.css';



const Navbar = () => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.Logo} src={Logo} alt="logo" />
            </div>
            <div>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;