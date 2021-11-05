import axios from "axios";

export const auth_key = process.env.VUE_APP_AUTH_KEY || 'auth-jobserm';
export const auth = JSON.parse(localStorage.getItem(auth_key));

const backendInstance = axios.create({
  baseURL: process.env.VUE_APP_JOBSERM_ENDPOINT || "http://localhost:8000",
});

export default backendInstance;
