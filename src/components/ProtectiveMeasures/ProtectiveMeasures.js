import React from 'react';

import styles from './ProtectiveMeasures.module.css';

const ProtectiveMeasures = () => {
  const protectiveMeasures = [
    {
      id: 1,
      img: 'https://img.icons8.com/officel/80/000000/wash-your-hands.png',
      text:
        'Clean your hands often. Use soap and water, or an alcohol-based hand rub',
    },
    {
      id: 2,
      img: 'https://img.icons8.com/doodle/80/000000/social-distancing.png',
      text: 'Maintain a safe distance from anyone who is coughing or sneezing',
    },
    {
      id: 3,
      img: 'https://img.icons8.com/plasticine/80/000000/protection-mask.png',
      text: 'Wear a mask when physical distancing is not possible',
    },
    {
      id: 4,
      img: 'https://img.icons8.com/plasticine/80/000000/hospital-3.png',
      text:
        'If you have a fever, cough and difficulty breathing, seek medical attention',
    },
  ];
  return (
    <>
      {protectiveMeasures.map(({ img, text, id }) => {
        return (
          <div key={id} className={styles.measures}>
            <img src={img} alt="protective measure" />
            <span>{text}</span>
          </div>
        );
      })}
    </>
  );
};

export default ProtectiveMeasures;
