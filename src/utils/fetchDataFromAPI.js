import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: { maxResults: '50' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

// const res = await axios.get()...etc

// const data = await res.data;
// return data

export const fetchDataFun = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}