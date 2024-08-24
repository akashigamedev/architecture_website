import React from 'react';
import styles from './Hero.module.css';
import Button from '../button/Button';

const Hero = () => {
  return (
    <div className={styles.container}>
        <img src="/assets/images/hero.jpeg" alt="background" />
        <div className={styles.textSection}>
            <h1>Home Building Associates</h1>
            <p>Crafting personalized, innovative homes that reflect your unique style and needs.</p>
            <Button text={"Contact Us"} style={styles.btn}/>
        </div>
    </div>
  )
}

export default Hero