import React from 'react';
import styles from './Banner.module.css'
import banner from "../images/banner.jpg";

const Banner = () => {
    return (
        <section className={styles.container}>
            <img src={banner} alt="banner-page" />
            <div className={styles.textContainer}>
                <h1>Prs-Code</h1>
                <p>Immersed in thoughts</p>
            </div>
        </section>
    );
};

export default Banner;