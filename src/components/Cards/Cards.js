import React from 'react';

import styles from './Cards.module.css';
import Card from '../Card/Card';

const Cards = (props) => {
  console.log(props.data);
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
