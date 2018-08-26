import PropTypes from 'prop-types';
import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ title }) => (
  <div className={styles.hero}>
    <div className={styles.content}>
      <h1 className={styles.heading}>{title}</h1>
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string,
};

export default Hero;
