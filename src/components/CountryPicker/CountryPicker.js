import React from 'react';

import styles from './CountryPicker.module.css';

import { fetchAllCountriesData } from '../../api/index';

class CountryPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  async componentDidMount() {
    const countriesData = await fetchAllCountriesData();
    this.setState({ countries: countriesData });
  }

  renderSelectInput = () => {
    const { countries } = this.state;
    if (countries.length !== 0) {
      return (
        <select
          className={styles.selectCountry}
          onChange={(e) => this.props.fetchCountryData(e.target.value)}
          defaultValue="India"
        >
          {countries.map(({ name }) => {
            return (
              <option key={name} value={name}>
                {name}
              </option>
            );
          })}
        </select>
      );
    } else {
      return 'Loading';
    }
  };

  renderFlag = (country) => {
    if (country) {
      const selectedCountryData = this.state.countries.filter(
        ({ name }) => name === country
      );
      if (selectedCountryData[0].iso2) {
        return (
          <img
            className={styles.image}
            src={`https://www.countryflags.io/${selectedCountryData[0].iso2}/flat/64.png`}
            alt="flag"
          ></img>
        );
      } else {
        return null;
      }
    }
  };

  render() {
    const { selectedCountry } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.countryHeading}>
          <span>{selectedCountry}</span>
          {this.renderFlag(selectedCountry)}
        </div>
        {this.renderSelectInput()}
      </div>
    );
  }
}

export default CountryPicker;
