import axios from "axios";

export const getDataRequest = async () => {
  const response = await axios.get("http://users.bugred.ru/tasks/rest/list");
  return response.data;
};
