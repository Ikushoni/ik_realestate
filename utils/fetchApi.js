import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "9c9cea4537mshcc98c145d4d041ap182c13jsn95aadff4f0d2",
    },
  });

  return data;
};
