import React from 'react';

import styles from './Card.module.css';

import CountUp from 'react-countup';

const Card = ({ heading, total, color, src }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img className={styles.image} src={src} alt={heading} />
      </div>
      <span className={styles.count} style={{ color: color }}>
        <CountUp start={0} end={total} duration={2.5} separator="," />
      </span>
      <div className={styles.content}>
        <span className={styles.detail}>
          Number of {heading.toLowerCase()} cases of covid-19
        </span>
      </div>
    </div>
  );
};

export default Card;
