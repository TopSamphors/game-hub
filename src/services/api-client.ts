import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fca2ca6580594338a7019d308ebaa723",
  },
});
