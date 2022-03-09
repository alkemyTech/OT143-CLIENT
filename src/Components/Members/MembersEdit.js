import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';// Poner dentro de la carpeta Service o hacerlo local a cada componente?.
import '../FormStyles.css';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor  from '@ckeditor/ckeditor5-build-classic';
import { create } from '../../Services/membersService';

const MembersEdit = () => {
    const FORMAT_SUPPORTED = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
    const SchemaValidation  = Yup.object().shape({
        name : Yup.string()
            .required("Campo requerido")
            .min(4,"Obligatorio mas de 4 letras"),
        image : Yup.mixed()
            .required("se requiere imagen")
            .test("fileType","Formato de imagen invalido",(value)=> value && FORMAT_SUPPORTED.includes(value.type) ),
        description: Yup.string()
            .required("Campo requerido"),
        link: Yup.string()
            .required("Campo requerido")
            // .url("URL INVALIDA") no funciona bien la validacion de YUP
            .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, "URL INVALIDA")
    })
    const editFormik = useFormik({
        initialValues : {
            name : '',
            image : '',
            description : '',
            link : ''},

        validationSchema :  SchemaValidation ,

        onSubmit(values){
            const body = {
                name: values.name,
                description: values.description,
                link: values.link,
                image: values.image,
            };
            create(body)
            .then((response) => {
                console.log(response);
                alert("Se ha realizado con éxito");
              })
            .catch((error) => {
                console.log(error);
                alert("Ha ocurrido un problema, no se pudo realizar esta acción")
            });
        }
    });
    return ( <>
        <form className="form-container"  onSubmit={editFormik.handleSubmit}>
            <span className='title-form'>Nombre</span>
            <input className="input-field"
             value={editFormik.values.name}
             name="name"
             type="text"
             onChange={editFormik.handleChange}
             placeholder="ej: Pablo Ramirez" />
            <span className='errors-forms'>{editFormik.errors.name}</span>

            <span className='title-form'>Imagen</span>
            <input className="input-field"
             id="image"
             name="image"
             type="file"
             placeholder="Imagen aqui"
             onChange={(e) => {editFormik.setFieldValue("image", e.currentTarget.files[0])}} />
            <span className='errors-forms'>{editFormik.errors.image}</span>

            <span className='title-form'>Descripcion</span>
            <CKEditor 
                placeholder="Descripicion"
                editor={ClassicEditor}
                data=""
                name="description"
                type="text"
                onReady={editor=>console.log(editor)}
                onChange={(e,editor)=>{
                    const data = editor.getData();
                    editFormik.setFieldValue("description", data)
                    console.log(data)
                }}
             />
            <span className='errors-forms'>{editFormik.errors.description}</span>

            <span className='title-form'>Link redes sociales</span>
            <input className="input-field"
             value={editFormik.values.link}
             name="link"
             type="text"
             placeholder='Linkedin - Facebook - Git'
             onChange={editFormik.handleChange} />
            <span className='errors-forms'>{editFormik.errors.link}</span>
            
            <button className='submit-btn' type='submit' >Editar</button>

        </form>
    </>);
}
 
export default MembersEdit;