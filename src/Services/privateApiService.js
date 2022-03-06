import axios from 'axios';

const token = localStorage.getItem("token");

const config = {
    headers: {
        Group: "143",                //Aqui va el ID del equipo!!
        Authorization: `Bearer ${token}`
    }
}

export const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res =>{
        console.log(res.data);
        console.log(res.status)  
    } )
    .catch(err => console.log(err))
}

export const Post = async (url, body) => {
    const res = await axios.post(url, body, config).catch(err=>console.log(err));
    return res;
}

export default Get