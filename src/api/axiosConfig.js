import axios from 'axios';

export default axios.create({
    baseURL: '',
    headers: {"ngrok-skip-browser-warning" : "true"}
});