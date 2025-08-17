import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // JSON server URL
  
});

export default instance;