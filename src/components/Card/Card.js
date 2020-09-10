import React from 'react';

import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <span className="heading">Infected</span>
      <span className="count">8218128391</span>
      <span className="detail">Number of active cases of covid</span>
      <span className="date">12 wed 2020</span>
    </div>
  );
};

export default Card;
