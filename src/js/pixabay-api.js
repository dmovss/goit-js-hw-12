import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';

export const getAxiosPhotos = async (searchedQuery, page) => {
  const urlParams = new URLSearchParams({
    key: '45497823-3ee11a5b90ff874601dfe7178',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 40,
    page: page,
  });

  const response = await axios.get(`${BASE_URL}${urlParams}`);
  return response.data;
};
