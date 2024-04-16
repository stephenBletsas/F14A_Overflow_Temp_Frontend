import axios from 'axios';

const fetchCompanyArticles = async (ticker) => {
  try {
    const response = await axios.get('/retrieve', {
      params: {
        group: 'SE3011-24-F14A-04',
        ticker: ticker,
        limit: 16
      }
    });
    return response.data; // Return the full response JSON
  } catch (error) {
    console.error("Failed to fetch data", error);
    throw error; // Rethrow to handle the error in the component
  }
};

export default fetchCompanyArticles;