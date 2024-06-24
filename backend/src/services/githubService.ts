import axios from 'axios';

const githubService = async (query: string, page: number, language: string) => {
  const response = await axios.get(`https://api.github.com/search/repositories?q=${query}+language:${language}+in:name&type=repositories&page=${page}&per_page=20`);
  
  return response.data;
};

export default githubService;
