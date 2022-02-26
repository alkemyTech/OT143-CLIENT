import axios from 'axios';

// const config = {
//     headers: {
//         Group: 01 ID del equipo
//     }
// }

const baseURL = "http://ongapi.alkemy.org/api"
//Luego de baseURL debe ir news,categories,etc.
export const Get = (url,id) => {
    axios.get(`${baseURL}/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

