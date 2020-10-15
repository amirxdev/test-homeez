import axios from "axios";

export default axios.create({
  baseURL: "http://54.169.152.77:3100/api/",
  headers: {
    "Content-type": "application/json"
  }
});