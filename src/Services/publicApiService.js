import axios from 'axios';

<<<<<<< HEAD

// const config = {
//     headers: {
//         Group: 01 ID del equipo
//     }
// }

=======
>>>>>>> 73bacd4b91a7a2353977158f54b324ec764ae05f
const baseURL = "http://ongapi.alkemy.org/api"
//Guardar en una variable de entorno BaseUrl
export const Get = async (url,id) => {
    try {
        const result  = await  axios.get(`${baseURL}/${url}/${id ? id : ""}`);
        return result; 
    } catch (error) {
        console.log(error)
    }
    
};

<<<<<<< HEAD
=======

export const Post = (url, body) => {
    axios.post(url, body)
    .catch(err=>console.log(err))
}

export default Get

>>>>>>> 73bacd4b91a7a2353977158f54b324ec764ae05f
