import axios from "axios";

const instance = axios.create({
  //firebase DB
  baseURL: "https://react-my-burger-f89a3-default-rtdb.firebaseio.com/",
});

export default instance;
