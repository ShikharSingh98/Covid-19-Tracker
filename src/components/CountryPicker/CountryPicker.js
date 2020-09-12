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

  render() {
    const { countries } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>Select Country </span>
          <img src="https://www.countryflags.io/be/flat/64.png"></img>
        </div>
        {countries.length !== 0 ? (
          <select className={styles.selectCountry}>
            {countries.map(({ name }) => {
              return (
                <option key={name} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        ) : null}
      </div>
    );
  }
}

export default CountryPicker;
