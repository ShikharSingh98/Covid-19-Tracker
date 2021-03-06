import axios from 'axios';
import moment from 'moment';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    return [
      {
        id: 1,
        heading: 'infected',
        src: 'https://img.icons8.com/plasticine/100/000000/being-sick.png',
        total: confirmed.value,
        color: '#4361ee',
        lastUpdate: lastUpdate,
      },
      {
        id: 2,
        heading: 'recovered',
        src: 'https://img.icons8.com/color/100/000000/recovery.png',
        total: recovered.value,
        color: '#188c31',
        lastUpdate: lastUpdate,
      },
      {
        id: 3,
        heading: 'death',
        src: 'https://img.icons8.com/color/100/000000/headstone.png',
        total: deaths.value,
        color: '#ef233c',
        lastUpdate: lastUpdate,
      },
    ];
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllCountriesData = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((d) => {
      return {
        infected: d.confirmed.total,
        deaths: d.deaths.total,
        date: moment(d.reportDate).format('MMM D'),
      };
    });
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
