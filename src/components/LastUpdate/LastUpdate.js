import React from 'react';

import styles from './LastUpdate.module.css';

const renderLastUpdate = (data) => {
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
    return null;
  }
};

const LastUpdate = ({ data }) => {
  return <div className={styles.lastUpdate}>{renderLastUpdate(data)}</div>;
};

export default LastUpdate;
