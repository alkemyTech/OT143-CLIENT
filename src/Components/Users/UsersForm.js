import React, { Fragment, useState } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { BsCamera } from "react-icons/bs";
import './UserForm.css'

const UserForm = () => {
    const [createUsuario, setCreateUsuario] = useState(false);
    const [usuarioRegister] = useState(false);

    const initialValues = {
        profilePhoto:'',
        name:'',
        email:'',
        password:'',
        roleId:'',
    }
    const validateFields = values => {
        let errors = {};

            if(!values.profilePhoto){
                errors.profilePhoto = 'Required! '
            }else if(!/.(jpg|png)$/i.test(values.profilePhoto)){
                errors.profilePhoto = 'Comprueba la extensión de tus imagenes, recuerda que los formatos aceptados son .jpg y .png'
            }

            if(!values.name){
                errors.name = 'Por favor ingrese un nombre!'
            }else if(!/^[a-zA-ZÀ-ÿ\s]{4,40}$/.test(values.name)){
                errors.name = 'El nombre solo puede contener letras y no menos 4 letras.'
            }

            if (!values.email) {
                errors.email = 'Required!';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Por favor ingresra con @ !';
            }

            if (!values.password) {
                errors.password = 'Required!';
            }else if (values.password.length <= 8){
                errors.password = 'El password debe tener al menos 8 digitos.';
            }

            if (!values.roleId) {
                errors.roleId = 'Required!';
            }

            return errors;
    }
    
    const handleSubmit = (valores, {resetForm}) => {
        resetForm();
        console.log(valores)
        console.log('Formumaliro registrado')
        setCreateUsuario(true);
        setTimeout(() => setCreateUsuario(false), 5000)
    }

    return (
        <Fragment>
            <h2 className='mt-5 mx-4'>Create user</h2>
            {usuarioRegister ? <button>Ir a editar usuario</button> : 
                <Formik
                    initialValues={initialValues}
                    validate={validateFields}
                    onSubmit={handleSubmit}
                >    
                    {({errors}) => 
                        <Form className="row g-8 mt-4 mx-4 form">
                            <div class="col-10 mt-2 mx-4">
                                <div className='imageUp' type='file'>
                                    <spam className='camera'><BsCamera /></spam>
                                </div>
                                <div class="mb-1 mt-2">
                                    <label for="formFileSm" class="form-label">Upload your photo</label>
                                    <Field 
                                        class="form-control form-control-sm" 
                                        id="formFileSm"
                                        name='profilePhoto' 
                                        type="file"
                                    />
                                    <ErrorMessage name='profilePhoto' component={() => (
                                        <div className='errors'>{errors.profilePhoto}</div>)}
                                    />
                                </div>
                                    <label className='form-label'>Name</label>
                                    <Field 
                                        className='form-control'
                                        type="text" 
                                        name="name"
                                        placeholder="John Doe"
                                    />
                                    <ErrorMessage name='name' component={() => (
                                        <div className='errors'>{errors.name}</div>)}
                                    />
                                    <label for='email'>Email</label>
                                    <Field 
                                        className="form-control" 
                                        type="text" 
                                        name="email" 
                                        placeholder="example@exam.com"
                                    />
                                    <ErrorMessage name='email' component={() => (
                                        <div className='errors'>{errors.email}</div>)}
                                    />
                                    <label for='password'>Password</label>
                                    <Field 
                                        className="form-control" 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password"
                                    />
                                    <ErrorMessage name='password' component={() => (
                                        <div className='errors'>{errors.password}</div>)}
                                    />
                                    <label for='roleId'>Role</label>
                                    <Field 
                                        className="form-select"
                                        name='roleId'
                                        as='select' 
                                    >
                                        <option value="" disabled >Select the role</option>
                                        <option value="adm">Admin</option>
                                        <option value="use">User</option>
                                    </Field>
                                    <ErrorMessage name='roleId' component={() => (
                                        <div className='errors'>{errors.roleId}</div>)}
                                    />
                            </div>
                                    <div class="col-10 mb-3 my-3 mx-4">
                                        <button 
                                            type="submit"
                                            class="btn btn-primary">User Creation</button>
                                    </div>
                                    {createUsuario && <p className='success'>Usuario creado exitosamente</p>}
                        </Form>
                    }
                </Formik>
            }
        </Fragment>
    );
}
 
export default UserForm;