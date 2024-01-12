import axios from 'axios';

const API_KEY = 'e0afd94223734353951f2cf7ac172358';

const weatherApi = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather?q=pune&appid=${API_KEY}`
});

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2', 
  params: {
    apiKey: API_KEY,
  },
});


export const getWeatherData = (city) => {
  return weatherApi.get('/current.json', {
    params: {
      q: city,
    },
  });
};

// Example function to get top headlines
export const getTopHeadlines = () => {
  return newsApi.get('/top-headlines', {
    params: {
      country: 'us', 
    },
  });
};


export const postExample = (data) => {
  return axios.post('https://example.com/api', data);
};

export default {
  getWeatherData,
  getTopHeadlines,
  postExample,
};
