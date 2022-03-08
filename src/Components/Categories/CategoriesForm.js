import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';
import '../FormStyles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { GetAllCategories, GetCategoriesId } from '../../Services/serviceCategories';

const CategoriesForm = () => {
<<<<<<< HEAD
    
    const [dataApi, setDataApi] = useState();
    const FORMAT_SUPPORTED = ['image/jpg', 'image/jpeg', 'image/png'];
    
    const SchemaValidation = Yup.object().shape({
        name : Yup.string()
            .required("Campo requerido")
            .min(4,"Obligatorio mas de 4 letras"),
        image : Yup.mixed()
            .required("No hay imagen cargada")
            .test("fileType","Formato de imagen invalido",(value)=> value && FORMAT_SUPPORTED.includes(value.type) ),
        description: Yup.string()
            .required("Campo requerido"),

    });
 
    const formCategories = useFormik({
        initialValues:{
            name:"",
            image : "",
            description : ""
        },
        validationSchema: SchemaValidation,
         async onSubmit(values){
            const resutl = await axios.post('http://ongapi.alkemy.org/api/categories', values)
            .then((res)=>{
                if(res.data.error){
                    const cargoId = async()=>{

                        //Harcodeo un ID para probar la funcion GetCategorias y mostrar la info

                        const dataId =  await GetCategoriesId(`${1606}`)
                        console.log(dataId.data);
                        setDataApi(dataId)
                        formCategories.resetForm({
                            name : dataId.data.name,
                            image: dataId.data.image,
                            description: dataId.data.description
                        });
                        formCategories.setSubmitting(false);
                        
                        
                    }
                    cargoId();
                }
            })

        }
    });

    return (
       <> 
       
        <form className='form-container' onSubmit={formCategories.handleSubmit} >
            <h3 className='title-form'>Categoria </h3>'
               
                <input 
                    onChange={formCategories.handleChange}
                    value={dataApi ? dataApi.data.name : formCategories.values.name }
                    className="input-field"
                    name="name"
                    type="text"
                    placeholder="Categoria" 
                    autoComplete='Objecto que traemos de la api'
                         />
            <span className='errors-forms'>{formCategories.errors.name}</span>
            <h3 className='title-form'>Imagen</h3>
                <input className="input-field"
                    id="image"
                    name="image"
                    type="file"
                    placeholder="Imagen aqui"
                    onChange={(e) => {formCategories.setFieldValue("image", e.currentTarget.files[0])}}
                 />
            <span className='errors-forms'>{formCategories.errors.image}</span>

            <h3 className='title-form'>Descripcion</h3>
            <CKEditor 
                
                editor={ClassicEditor}
                data={dataApi ? dataApi.data.description : "Escrbiba aqui"}
                name="description"
                type="text"
                onReady={editor=> editor}
                onChange={(e,editor)=>{
                    const data = editor.getData();
                    formCategories.setFieldValue("description", data);
                }}
                
             />
             <span className='errors-forms'>{formCategories.errors.description}</span>
             <span className='erros-forms' >{dataApi ? dataApi.error : ""}</span>
                    <button type='submit' >{formCategories.isSubmitting ? `Obteniendo datos de API...` : "Enviar"}
                    </button>
        </form>      

      
       </>
    );
}
 
export default CategoriesForm;
=======
	const [dataApi, setDataApi] = useState();
	const FORMAT_SUPPORTED = ['image/jpg', 'image/jpeg', 'image/png'];
	const SchemaValidation = Yup.object().shape({
		name: Yup.string()
			.required('Campo requerido')
			.min(4, 'Obligatorio mas de 4 letras'),
		image: Yup.mixed()
			.required('No hay imagen cargada')
			.test(
				'fileType',
				'Formato de imagen invalido',
				value => value && FORMAT_SUPPORTED.includes(value.type)
			),
		description: Yup.string().required('Campo requerido'),
	});
	const formCategories = useFormik({
		initialValues: {
			name: '',
			image: '',
			description: '',
		},
		validationSchema: SchemaValidation,
		async onSubmit(values) {
			const resutl = await axios
				.post('http://ongapi.alkemy.org/api/categories', values)
				.then(res => {
					if (res.data.error) {
						const cargoId = async () => {
							//Cargo datos de un ID para que me devuelva un campo y mostrarlo en el input
							const dataId = await axios.get(
								`http://ongapi.alkemy.org/api/categories/${1603}`
							);
							console.log(dataId.data.data);
							setDataApi(dataId);
							formCategories.resetForm({
								name: dataId.data.data.name,
								image: dataId.data.data.image,
								description: dataId.data.data.description,
							});
							formCategories.setSubmitting(false);
						};
						cargoId();
					}
				});
		},
	});

	return (
		<>
			<form className="form-container" onSubmit={formCategories.handleSubmit}>
				<span className="title-form">Nombre</span>'
				<input
					onChange={formCategories.handleChange}
					value={dataApi ? dataApi.data.data.name : formCategories.values.name}
					className="input-field"
					name="name"
					type="text"
					placeholder="ej: Pablo Ramirez"
					autoComplete="Objecto que traemos de la api"
				/>
				<span className="errors-forms">{formCategories.errors.name}</span>
				<span className="title-form">Imagen</span>
				<input
					className="input-field"
					id="image"
					name="image"
					type="file"
					placeholder="Imagen aqui"
					onChange={e => {
						formCategories.setFieldValue('image', e.currentTarget.files[0]);
					}}
				/>
				<span className="errors-forms">{formCategories.errors.image}</span>
				<span className="title-form">Descripcion</span>
				<CKEditor
					editor={ClassicEditor}
					data={dataApi ? dataApi.data.data.description : 'Escrbiba aqui'}
					name="description"
					type="text"
					onReady={editor => editor}
					onChange={(e, editor) => {
						const data = editor.getData();
						formCategories.setFieldValue('description', data);
					}}
				/>
				<span className="errors-forms">
					{formCategories.errors.description}
				</span>
				<span className="erros-forms">{dataApi ? dataApi.error : ''}</span>
				<button type="submit">
					{formCategories.isSubmitting
						? `Obteniendo datos de API...`
						: 'Enviar'}
				</button>
			</form>
		</>
	);
};

export default CategoriesForm;
>>>>>>> 9a44d7766b2528ab383af6be7ce6dd85d4a90765
