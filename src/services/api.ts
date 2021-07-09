import axios from 'axios'

const apiUrl = axios.create({
    baseURL: 'https://www.freetogame.com/api/games'
})

export {apiUrl}