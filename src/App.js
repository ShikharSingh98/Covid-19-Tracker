import React from 'react';

import styles from './App.module.css';

import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import LastUpdate from './components/LastUpdate/LastUpdate';

import { fetchData } from './api/index';

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
    const { globalData, selectedCountryData } = this.state;
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
          </div>
          <Cards data={globalData} />
          <Chart />
          <LastUpdate data={globalData} />

          <CountryPicker
            fetchCountryData={this.fetchCountryData}
            selectedCountry={this.state.selectedCountry}
          />
          <Cards data={selectedCountryData} />
        </div>
      </>
    );
  }
}

export default App;
