import React, { Fragment, useEffect, useState } from 'react';
import CreateUser from './CreateUser';
import { Formik } from 'formik';
import './UserForm.css'
import UsersFormNewEdit from './UsersFormNewEdit';


/* creee un array para simular los usuarios registrados */
const usuariosRegistrados = [
    {   
        id: 1,
        profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxcD315N1V4yVc8wJ3R-dka9ocqLaPiAtAg&usqp=CAU',
        name: 'Homero',
        email: 'homer@js.com',
        password: '321654987',
        roleId: 'admin',
    },

    {   
        id: 2,
        profilePhoto: 'https://imagenpng.com/wp-content/uploads/2015/03/Imagenes-BART-png-0.png',
        name: 'bart',
        email: 'bart@jss.com',
        password: '123456789',
        roleId: 'user',
    }
]

/* una nueva promise para llamar el array */
const getFetch = new Promise((resolve, reject)=>{
    const condition = true
    if(condition){
        setTimeout(()=>{
            resolve(usuariosRegistrados)
        },2000)
    }else {
        setTimeout(()=>{
            reject('404')
        },2000)
    }
})

const UserForm = () => {
    const [userRegister, setUserRegister] = useState([])
   
    useEffect = (() => {
        getFetch // Esto seria como una llamada a la api de usuarios ya registrados
        .then (res => {
            setUserRegister(res)
        })
        .catch(err => console.log(err))
        .finally(() => console.log('task finally'))  
    })

    /* en el return pase un ternario, donde si userRegister es, me muestre los usuarios registrados,
       y si es ! q me muestra el formulario para crear  */
    return (
        <Fragment>
            {userRegister ?  <div> 
                                <h2 className='mt-5 mx-5'>Register user -- Edit</h2>
                                    {userRegister.map(users => 
                                        <Formik>    
                                            <div className="row g-8 mt-4 mx-4 form" key={users.id}>
                                                <div class="col-10 mt-2 mx-4">
                                                    <div className='imageUp'>
                                                        <spam className='camera'><img className='imageUser' src={users.profilePhoto} alt='foto usuario'></img></spam>
                                                    </div>
                                                    <div class="mb-1 mt-2">
                                                        <label>Name</label>
                                                            <h5 className='card-title'>
                                                                {users.name}
                                                            </h5> 
                                                    </div>
                                                    <div class="mb-1 mt-2"></div>
                                                        <label>Email</label>
                                                            <h5 className="card-title">
                                                                {users.email}
                                                            </h5>
                                                    </div>
                                                    <div class="mb-1 mt-2 mx-4">
                                                        <label for='password'>Password</label>
                                                            <h5 className="card-title">
                                                                {users.password}    
                                                            </h5> 
                                                    </div>
                                                    <div class="mb-1 mt-2 mx-4">
                                                        <label for='roleId'>Role</label>
                                                            <h5 className='card-title'>
                                                                {users.roleId}
                                                            </h5>
                                                    </div> 
                                                    <div class="col-10 mb-3 my-3 mx-4">
                                                        <button type="submit"class="btn btn-primary">Editar</button>
                                                    </div> 
                                            </div>
                                        </Formik>
                                    )}
                            </div>   :  <UsersFormNewEdit />
            } 
        </Fragment>
    );
}
 
export default UserForm;