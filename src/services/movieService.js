import axios from 'axios';

const API_KEY = '5d9a965f79msh00d101c7aeecf61p1cacaajsn7a2fbec056f1';
const API_HOST = 'imdb-top-100-movies.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: 'https://imdb-top-100-movies.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST,
    'Content-Type': 'application/json'
  }
});

export const getTopMovies = async () => {
  try {
    const response = await apiClient.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching top movies:', error);
    throw error;
  }
};
