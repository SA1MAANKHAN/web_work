import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/e-clone-33ffe/us-central1/api",
});

export default instance;
