import React from 'react';
import { useFormik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';
import testimonialsService from "../../Services/testimonialsService";
import { Form, Button, Container } from 'react-bootstrap';
import { warningMsg, successMsg } from '../Alerts/Alert';
import { convertToBase64 } from './../base64/toBase64';

const schema = Yup.object().shape({
  name: Yup.string("Ingrese su nombre")
    .required("El campo nombre es requerido")
    .min(4, "El campo nombre debe tener más de 4 letras"),
  image: Yup.mixed()
    .nullable()
    .required("La imagen es requerida"),
  description: Yup.string("Ingrese una descripción")
    .required("El campo descripción es requerido")
});


const TestimonialForm = (props) => {

  const testimony = props.testimony ? {
    id: props.testimony.id,
    name: props.testimony.name,
    description: props.testimony.description
  }
    :
    {
      name: '',
      description: '',
      image: '',
    };

  const formik = useFormik({
    initialValues: testimony,
    validationSchema: schema,
    onSubmit: values => {
      !props.testimony
        ?
        testimonialsService.create(values).then(response => {
          console.log(response);
          successMsg('Testimonio creado con éxito');
        })
          .catch(error => {
            console.log(error);
            warningMsg('No se pudo crear el testimonio');
          })
        :
        testimonialsService.update(values, testimony.id).then(response => {
          console.log(response);
          successMsg('Testimonio editado con éxito');
        })
          .catch(error => {
            console.log(error);
            warningMsg('No se pudo editar el testimonio');
          });
    },
  });

  const handleImageChange = async (event) => {
    const base64String = await convertToBase64(event?.target.files[0]);
    formik.setFieldValue("image", base64String);
  };

  return (
    <Container className="mt-4">
      <h2 className="title-form">{`${!props.testimony ? 'Crear' : 'Editar'
        } testimonio`}</h2>
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
              accept="image/png, image/jpeg"
              type="file"
              name="defaultImage"
              onChange={(event) => handleImageChange(event)}
            />
            {formik.touched.image && formik.errors.image ? (
              <div className="mt-1">{formik.errors.image}</div>
            ) : null}
          </Form.Group>
          <Button type="submit" className="w-100 mb-2 mt-3" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
            {!props.testimony ? 'Crear' : 'Editar'}
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default TestimonialForm;
