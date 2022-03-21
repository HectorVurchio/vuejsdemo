import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost",
  withCredentials: false,
  headers: { "Content-Type": "multipart/form-data" },
});

export default {
  postSendung(data) {
    return apiClient.post("/excel-files", data);
  },
};
