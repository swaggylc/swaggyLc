import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:3000/',
    baseURL: 'https://autumnfish.cn/api/joke',
    timeout: 50000
})

export default instance