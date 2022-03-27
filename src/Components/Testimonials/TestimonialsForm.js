import React from 'react';
import { useFormik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import '../FormStyles.css';
import { Form, Button, Container } from 'react-bootstrap';
import { warningMsg, successMsg } from '../Alerts/Alert';

const baseURL = 'https://ongapi.alkemy.org/api';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('El campo nombre es requerido')
    .min(4, 'El campo nombre debe tener más de 4 letras'),
  image: Yup.mixed()
    .required('La imagen es requerida')
    .test('filetype', 'Formato de imágen inválido', value => {
      if (value) {
        if (value.includes('png')) {
          return true;
        } else if (value.includes('jpg')) {
          return true;
        } else if (value.includes('jpeg')) {
          return true;
        } else {
          return false;
        }
      }
    }),
  description: Yup.string().required('El campo descripción es requerido'),
});

const TestimonialForm = props => {
  const testimonials = props.testimonials
    ? {
      id: props.testimonials.id,
      name: props.testimonials.name,
      description: props.testimonials.description,
      image: props.testimonials.image,
    }
    : {
      id: uuid(),
      name: '',
      description: '',
      image: '',
    };

  const formik = useFormik({
    initialValues: testimonials,
    validationSchema: schema,
    onSubmit: values => {
      const body = {
        id: testimonials.id,
        name: values.name,
        description: values.description,
        image: values.image,
      };
      !props.testimonials
        ? axios
          .post(`${baseURL}/testimonials`, body)
          .then(response => {
            console.log(response);
            successMsg('Testimonio creado con éxito');
          })
          .catch(error => {
            console.log(error);
            warningMsg('No se pudo crear el testimonio');
          })
        : axios
          .put(`${baseURL}/testimonials/${testimonials.id}`, values)
          .then(response => {
            console.log(response);
            successMsg('Testimonio editado con éxito');
          })
          .catch(error => {
            console.log(error);
            warningMsg('No se pudo editar el testimonio');
          });
    },
  });

  return (
    <Container className="mt-4">
      <h2 className="title-form">
        {`${!props.testimonial ? 'Crear' : 'Editar'}`} testimonios
      </h2>
      <div className="mt-5">
        <Form className="form" onSubmit={formik.handleSubmit}>
          <Form.Group className="mt-2 mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name || ''}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="mt-1">{formik.errors.name}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mt-3 mb-3">
            <Form.Label>Descripción</Form.Label>
            <CKEditor
              placeholder="Descripción"
              editor={ClassicEditor}
              data={formik.values.description || ''}
              name="context"
              type="text"
              onChange={(e, editor) => {
                formik.setFieldValue('description', editor.getData());
              }}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="mt-1">{formik.errors.description}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mt-3 mb-3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              name="image"
              type="file"
              placeholder="Imagen"
              accept=".jpg, .jpeg, .png"
              value={formik.values.image || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.image && formik.errors.image ? (
              <div className="mt-1">{formik.errors.image}</div>
            ) : null}
          </Form.Group>
          <Button type="submit" className="w-100 mb-2 mt-3" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
            {!props.testimonials ? 'Crear' : 'Editar'}
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default TestimonialForm;
