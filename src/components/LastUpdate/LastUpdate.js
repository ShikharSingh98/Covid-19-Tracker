import React from 'react';
import { ClipLoader } from 'react-spinners';

import styles from './LastUpdate.module.css';

const renderLastUpdate = (data) => {
  if (data) {
    if (data.length !== 0) {
      return (
        <span>
          Last updated :
          {` ${new Date(data[0].lastUpdate).toDateString()}, ${new Date(
            data[0].lastUpdate
          ).toLocaleTimeString()}`}
        </span>
      );
    } else {
      return <ClipLoader css={{ margin: '0 1rem' }} color="teal" />;
    }
  } else {
    return <ClipLoader css={{ margin: '0 1rem' }} color="teal" />;
  }
};

const LastUpdate = ({ data }) => {
  return <div className={styles.lastUpdate}>{renderLastUpdate(data)}</div>;
};

export default LastUpdate;
