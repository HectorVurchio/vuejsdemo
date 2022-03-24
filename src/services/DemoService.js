import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost",
  withCredentials: false,
  headers: { "Content-Type": "multipart/form-data" },
});

export default {
  getErhalten(perPage, page) {
    return apiClient.get(`events?_limit=${perPage}&_page=${page}`);
  },
  postSendung(data) {
    return apiClient.post("/excel-files", data);
  },
};
