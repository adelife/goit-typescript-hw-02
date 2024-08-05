import axios from "axios";

const API_KEY = "ZO6wFYZRWL-ggjCcvy0qnd5JpnfHlOrYCJRGsqD5PMk";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.params = {
  orientation: "landscape",
  per_page: 9,
  client_id: API_KEY,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);
  return data;
};