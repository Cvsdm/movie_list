import axios from 'axios';

export async function getList (page) {
    return await axios.get(process.env.REACT_APP_API_BASEURL + "discover/movie", { params: { api_key: process.env.REACT_APP_API_KEY , page: page} }).then(res => res.data);
}

export async function getMovie(id) {
    return await axios.get(process.env.REACT_APP_API_BASEURL + "movie/" + id, { params: { api_key: process.env.REACT_APP_API_KEY , append_to_response : "credits"} }).then(res => res.data);
}
