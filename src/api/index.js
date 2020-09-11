import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchGlobalData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return [
      {
        id: 1,
        heading: 'Infected',
        src: 'https://img.icons8.com/plasticine/100/000000/being-sick.png',
        total: confirmed.value,
        color: '#4361ee',
        lastUpdate: lastUpdate,
      },
      {
        id: 2,
        heading: 'Recovered',
        src: 'https://img.icons8.com/color/100/000000/recovery.png',
        total: recovered.value,
        color: '#188c31',
        lastUpdate: lastUpdate,
      },
      {
        id: 3,
        heading: 'Death',
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
