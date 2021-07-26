import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3", //base url for requests to movie API
});

export default instance;

