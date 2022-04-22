import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",

});

export default instance


// https://api.themoviedb.org/3/trending/all/week?api_key=b4b969f8cedde093afc785cddf30eb9c&language=en-US