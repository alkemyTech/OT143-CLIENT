import React from 'react';
import { useFormik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import '../FormStyles.css';
import { Form, Button, Container } from "react-bootstrap";
import { warningMsg, successMsg } from '../Alerts/Alert';
import { create, update } from './../../Services/slideService';
import { convertToBase64 } from './../base64/toBase64';

const baseURL = "https://ongapi.alkemy.org/api";

const schema = Yup.object().shape({
    name : Yup.string("Ingrese su nombre")
        .required("El campo nombre es requerido")
        .min(4, "El campo nombre debe tener más de 4 letras"),
    image : Yup.mixed()
        .nullable()
        .required("La imagen es requerida"),
    description : Yup.string("Ingrese una descripción")
        .required("El campo descripción es requerido")
});


const TestimonialForm = (props) => {

    const testimonials = props.testimonials ? {
        id: props.testimonials.id,
        name: props.testimonials.name,
        description: props.testimonials.description
    } : {
        id: uuid(),
        name: "",
        description: "",
        image: ""
    }

    const formik = useFormik({
        initialValues: testimonials,
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values)
            const body = {
                id: testimonials.id,
                name: values.name,
                description: values.description,
                image: values.image
            }
            !props.testimonials ? axios
                .post(`${baseURL}/testimonials`, body)
                .then((response) => {
                    console.log(response);
                    successMsg("Testimonio creado con éxito");
                })
                .catch((error) => {
                    console.log(error);
                    warningMsg("No se pudo crear el testimonio");
                })
            : axios
                .put(`${baseURL}/testimonials/${testimonials.id}`, values)
                .then((response) => {
                    console.log(response);
                    successMsg("Testimonio editado con éxito");
                })
                .catch((error) => {
                    console.log(error);
                    warningMsg("No se pudo editar el testimonio");
                })
        }
    })


    const handleImageChange = async (event) => {
		const base64String = await convertToBase64(event?.target.files[0]);
		formik.setFieldValue("image", base64String);
	};

    return (
        <Container>
            <h2 className='title-form'>{`${!props.testimonials ? "Crear" : "Editar"}`} Testimonios</h2>
            <Form className='form-container' onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-2">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name || ""}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className='mt-1'>{formik.errors.name}</div>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Descripción</Form.Label>
                    <CKEditor 
                        placeholder="Descripción"
                        editor={ClassicEditor}
                        data={formik.values.description || ""}
                        name="context"
                        type="text"
                        onChange={(e, editor) => {
                            formik.setFieldValue("description", editor.getData());
                            }
                        }
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="mt-1">
                            {formik.errors.description}
                        </div>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-2">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            accept= "image/png, image/jpeg"
                            type="file"
                            name="defaultImage"
                            onChange={(event) => handleImageChange(event)}
                        />
                        {formik.touched.image && formik.errors.image ? (
                            <div className='mt-1'>
                                {formik.errors.image}
                            </div>
                        ) : null}
                </Form.Group>
                <Button type="submit">{!props.testimonials ? "Crear" : "Editar"}</Button>
            </Form>
        </Container>
    );
}

export default TestimonialForm;