import axios from "axios";

const api = axios.create({
  baseURL: "https://flexora-aonz.vercel.app",
});

export default api;