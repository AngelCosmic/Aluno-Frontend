import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://aluno-backend1.herokuapp.com'
})
 
export default api;
