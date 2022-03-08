import axios from 'axios';

<<<<<<< HEAD


// const config = {
//     headers: {
//         Group: 01 ID del equipo
//     }
// }

 
//Guardar en una variable de entorno BaseUrl

export const Get = async (url,id) => {
    try {
        const result  = await  axios.get(`${process.env.REACT_APP_BASE_URL}/${url}/${id ? id : ""}`);
        return result; 
    } catch (error) {
        console.log(error)
    }
    
};

=======
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
>>>>>>> 9a44d7766b2528ab383af6be7ce6dd85d4a90765
