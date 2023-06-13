import axios from "axios";

export const baseUrl = "http://localhost:3005";

export const fetchData = async (route: string) => {
  const response = await JSON.parse(JSON.stringify(axios.get(`http://localhost:3005/${route}`)));
  return response.data;
};
