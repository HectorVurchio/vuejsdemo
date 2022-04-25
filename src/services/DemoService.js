import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://129.213.41.157",
  withCredentials: false,
  headers: { "Content-Type": "multipart/form-data" },
});

export default {
  getExcel(file) {
    return apiClient.get(`/excel-files/${file}`);
  },
  getErhalten(perPage, page) {
    return apiClient.get(`upload?_limit=${perPage}&_page=${page}`);
  },
  postSendung(data) {
    return apiClient.post("/excel-files", data);
  },
};
