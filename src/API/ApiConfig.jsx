import axios from "axios";

const baseURL = "https://classapi.sepehracademy.ir/api";

const axoisInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application.jason",
  },
});

export default axoisInstance;
