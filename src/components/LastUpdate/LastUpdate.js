import React from 'react';

import styles from './LastUpdate.module.css';

const LastUpdate = ({ data }) => {
  return (
    <div className={styles.lastUpdate}>
      {data.length !== 0 ? (
        <span>
          Last updated :
          {` ${new Date(data[0].lastUpdate).toDateString()}, ${new Date(
            data[0].lastUpdate
          ).toLocaleTimeString()}`}
        </span>
      ) : null}
    </div>
  );
};

export default LastUpdate;
