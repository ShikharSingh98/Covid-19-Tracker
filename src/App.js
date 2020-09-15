import React from 'react';

import styles from './App.module.css';

import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import LastUpdate from './components/LastUpdate/LastUpdate';

import { fetchData } from './api/index';
import ProtectiveMeasures from './components/ProtectiveMeasures/ProtectiveMeasures';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      globalData: [],
      selectedCountry: '',
      selectedCountryData: [],
    };
  }

  fetchCountryData = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      selectedCountry: country,
      selectedCountryData: fetchedData,
    });
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ globalData: fetchedData });
    this.fetchCountryData('India');
  }

  render() {
    const { globalData, selectedCountryData, selectedCountry } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <span>C</span>
          <img
            className={styles.image}
            src="https://img.icons8.com/plasticine/70/000000/coronavirus.png"
            alt="covid-19"
          />
          <span>VID-19 TRACKER</span>
        </div>
        <h2 className={styles.globalheading}>Global Status</h2>
        <Cards data={globalData} />
        <div className={styles.chartContainer}>
          <div className={styles.chartContent}>
            <Chart />
          </div>
        </div>
        <CountryPicker
          fetchCountryData={this.fetchCountryData}
          selectedCountry={selectedCountry}
        />
        <Cards data={selectedCountryData} />

        <ProtectiveMeasures />
        <LastUpdate data={globalData} />
      </div>
    );
  }
}

export default App;
