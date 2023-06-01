import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "87ac0d0a92a34ae4877797206e7fad64",
  },
});
