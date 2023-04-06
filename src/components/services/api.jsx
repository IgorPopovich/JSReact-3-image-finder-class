// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.params = {
//   key: '32993418-9f4f41ff9851a5ddec46140a8',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// export const fetchImages = async (query, page) => {
//   const { data } = await axios.get(`?q=${query}&page=${page}`);
//   return data;
// };

export function fetchImages (name, page) {
    return fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=32993418-9f4f41ff9851a5ddec46140a8&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.json())
}


// export default api;
