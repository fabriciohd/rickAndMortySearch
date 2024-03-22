import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
})

Api.interceptors.response.use(
  response => {
    return response
  }
)

export default Api
