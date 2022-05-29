import React from 'react';

import styles from './logo.module.css';

import apple from '../images/png-apple-logo-9711.png';
import samsung from '../images/samsung-logo-png-1305.png';
import xiaomi from '../images/xiaomi-33362.png';

const Logos = () => {
    return (
        <section className={styles.container}>
            <h3>Whats Our Brands</h3>
            <div>
            <img src={apple} alt="suppor-logo"/>
            <img src={samsung} alt="suppor-logo" />
            <img src={xiaomi} alt="suppor-logo"/>
            </div>
        </section>
    );
};

export default Logos;