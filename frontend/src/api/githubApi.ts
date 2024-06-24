import axios from 'axios';
import { Language } from '../types/Language';

const API_URL = 'http://localhost:3000/api/github/search';

export const searchRepositories = async (query: string, page: number, language?: Language | '') => {
  const params: any = {
    query,
    page,
  };

  if (language) {
    params.language = language;
  }

  const response = await axios.get(API_URL, { params });
  return response.data;
};
