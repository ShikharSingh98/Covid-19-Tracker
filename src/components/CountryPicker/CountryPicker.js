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
        <span>Country Status</span>
        {countries.length !== 0 ? (
          <select>
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
