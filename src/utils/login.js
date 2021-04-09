import axios from 'axios'

const request = axios.create({
baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0'
})

export default request