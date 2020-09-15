import React from 'react';

import styles from './Cards.module.css';
import Card from '../Card/Card';
import { ClipLoader } from 'react-spinners';

const Cards = ({ data }) => {
  if (data) {
    return (
      <div className={styles.container}>
        {data.map(({ id, ...otherProps }) => (
          <Card key={id} {...otherProps} />
        ))}
      </div>
    );
  } else {
    return <ClipLoader css={{ margin: '0 1rem' }} color="teal" />;
  }
};

export default Cards;
