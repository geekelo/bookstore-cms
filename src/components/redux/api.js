import axios from 'axios';

const API_BARE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ycwmmreAk01oqPNfnlt2';

const api = axios.create({
  baseURL: API_BARE_URL,
});

export default api;
