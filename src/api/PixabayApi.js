import axios from 'axios';

const imageApi = axios.create({
  baseURL: 'https://pixabay.com/api',
});

const PixabayApi = async ({ page = 1, searchQuery = '' }) => {
  const res = await imageApi.get('/', {
    params: {
      q: searchQuery,
      page,
      key: '29947624-9d3c85b5a2e9a5d7d2ff2aa2b',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return res.data.hits;
};

export default PixabayApi;
