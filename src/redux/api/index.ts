import axios from "axios";

export const baseUrl = "http://localhost:3005";

export const fetchData = async (route: string) => {
  const response = JSON.parse(JSON.stringify(await axios.get(`${baseUrl}/${route}`)));
  return response.data;
};
