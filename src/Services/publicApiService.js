import axios from 'axios';

const config = {
    headers: {
        Group: "143"               //Aqui va el ID del equipo!!
    }
}

export const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const Post = (url, body) => {
    axios.post(url, body)
    .catch(err=>console.log(err))
}

export default Get