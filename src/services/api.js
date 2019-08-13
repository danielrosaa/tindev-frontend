import axios from 'axios'

const api = axios.create({
    baseURL: 'https://tindev-bac.herokuapp.com/'
})

export default api