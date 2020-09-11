import React from 'react';

import styles from './Card.module.css';

import CountUp from 'react-countup';

const Card = ({ count, lastUpdate }) => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>Infected</span>
      <span className={styles.count}>
        <CountUp start={0} end={count} duration={2.5} separator="," />
      </span>
      <div className={styles.content}>
        <span className={styles.detail}>Number of active cases of covid</span>
        <span className={styles.date}>
          {new Date(lastUpdate).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default Card;
