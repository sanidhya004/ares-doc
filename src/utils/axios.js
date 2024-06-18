import axios from "axios";

const instance = axios.create({
   // baseURL: "https://ares.adaptable.app",
   baseURL:"https://ares-backend-main.onrender.com"
});

export default instance;
