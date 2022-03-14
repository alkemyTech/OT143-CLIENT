import React, { useState, useEffect } from "react";
import "../../Components/FormStyles.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container } from "react-bootstrap";
import { isSchema } from "yup";
import { postContact } from "../../Services/contactsService";
import {warningMsg} from './../Alerts/Alert';


const ContactForm = () => {

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const schema = Yup.object().shape({
        name: Yup.string()
            .required("El nombre es requerido"),
        email: Yup.string()
            .required("El email es requerido")
            .matches(emailRegex, "El email ingresado no es válido"),
        phone: Yup.string()
            .required("El telefono es requerido")
            .matches(phoneRegex, "El numero ingresado no es válido"),
        message: Yup.string()
            .required("El mensaje es requerido")
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        },
        validationSchema: schema,
        async onSubmit (values, { resetForm }) {
            console.log(values , "VALUES");
            const body = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                message: values.message
            };
            try {
                values ? postContact(body) : warningMsg("Vuelva a completar el formulario");
               
            } catch (error) {
                error ? warningMsg("Internal Server Error") :
                console.log(error);
            }
            
        }
    })

    return (
        <Container>
            <h2 className="title-form">Formulario de contacto</h2>
            <Form className="form-container" onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formik.values.name || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="mt-1">
                            {formik.errors.name}
                        </div>
                    ) : null}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={formik.values.email || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="mt-1">
                            {formik.errors.email}
                        </div>
                    ) : null}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={formik.values.phone || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="mt-1">
                            {formik.errors.phone}
                        </div>
                    ) : null}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                        type="text"
                        name="message"
                        value={formik.values.message || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <div className="mt-1">
                            {formik.errors.message}
                        </div>
                    ) : null}
                </Form.Group>
                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    )
}

export default ContactForm;