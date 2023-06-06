import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "299d8c828fe64b62936c8438e4b8b11d",
  },
});
