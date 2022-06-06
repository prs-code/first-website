import React from 'react';
import { Link } from 'react-router-dom';
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/Aboutus">About Us</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;