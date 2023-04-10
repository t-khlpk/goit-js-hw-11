// const axios = require(`axios`).default;
import axios from 'axios';
const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://pixabay.com/api/';
const params = `image_type=photo&orientation=horizontal&per_page=40`;

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async getImages() {
    const url = `${BASE_URL}?q=${this.searchQuery}&page=${this.page}&key=${API_KEY}&${params}`;
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.incrementPage();
      return data;
    } catch (error) {
      return console.log(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}