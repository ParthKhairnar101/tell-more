import axios from "axios";

const instance = axios.create({
    baseURL:'http://127.0.0.1:5001/clone-8a1ca/us-central1/api' //the api cloud fn url is imported here
});

export default instance;