import React from 'react';

import styles from './App.module.css';

import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';

import { fetchGlobalData } from './api/index';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      globalData: [],
      selectedCountry: '',
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchGlobalData();
    this.setState({ globalData: fetchedData });
  }
  render() {
    const { globalData } = this.state;
    return (
      <>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>COVID-19 TRACKER </h1>
          <div>
            <img
              className={styles.image}
              src="https://img.icons8.com/ultraviolet/40/000000/virus.png"
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.globalHeadingContainer}>
            <h2 className={styles.globalheading}>Global Status</h2>
            <div>
              <img src="https://img.icons8.com/plasticine/50/000000/geography.png" />
            </div>
          </div>
          <Cards data={globalData} />
          <Chart />
          <div className={styles.lastUpdate}>
            {globalData.length !== 0 ? (
              <span>
                Last updated :
                {` ${new Date(
                  globalData[0].lastUpdate
                ).toDateString()}, ${new Date(
                  globalData[0].lastUpdate
                ).toLocaleTimeString()}`}
              </span>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default App;
