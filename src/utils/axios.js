import axios from "axios";

const instance = axios.create({
  baseURL: "https://ares.adaptable.app",
});

export default instance;
