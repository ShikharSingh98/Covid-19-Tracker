import React from 'react';

import styles from './Cards.module.css';
import Card from '../Card/Card';

const Cards = ({ data }) => {
  if (data.length === 0) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      {data.map(({ id, ...otherProps }) => (
        <Card key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Cards;
