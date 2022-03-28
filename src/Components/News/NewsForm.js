import React, { useState, useEffect } from "react";
import "../../Components/FormStyles.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { create, update } from "../../Services/news";
import { warningMsg, successMsg } from "../Alerts/Alert.js";
import { convertToBase64 } from "./../base64/toBase64";

const BASE_URL = "https://ongapi.alkemy.org/api";

const schema = Yup.object().shape({
  title: Yup.string()
    .required("El título es requerido")
    .min(4, "El título debe contener una longitud mínima de 4 caracteres"),
  content: Yup.string().required("El contenido es requerido"),
  category: Yup.number().required().positive("Debe seleccionar una categoría"),
  image: Yup.mixed()
    .nullable()
    .required("La imagen es requerida"),
});

const errorsStyles = { color: 'red', fontSize: '.875em' };

const NewsForm = props => {
  const news = props.news
    ? {
      id: props.news.id,
      title: props.news.name,
      content: props.news.content,
      category: props.news['category_id'] || 0,
      image: props.news.image,
    }
    : {
      title: '',
      content: '',
      category: 0,
      image: '',
    };

  const [categories, setCategories] = useState([]);

  const formik = useFormik({
    initialValues: news,
    validationSchema: schema,
    onSubmit(values) {
      const body = {
        name: values.title,
        content: values.content,
        category_id: parseInt(values.category),
        image: values.image,
      };
      !props.news
        ? create(body)
          .then((response) => {
            console.log(response);
            successMsg("Novedad creada con éxito");
          })
          .catch((error) => {
            console.log(error);
            warningMsg("Error. No se pudo crear la novedad");
          })
        : update(body, news.id)
          .then((response) => {
            console.log(response);
            successMsg("Novedad editada con éxito");
            props.close();
          })
          .catch((error) => {
            console.log(error);
            warningMsg("Error. No se pudo editar la novedad");
          });
    },
  });

  useEffect(() => {
    const request = axios.get(`${BASE_URL}/categories`);
    request
      .then(response => setCategories(response.data.data))
      .catch(error => {
        console.log(error);
        warningMsg('Error. No se pudo cargar las categorías');
      });
  }, []);

  const handleImageChange = async (event) => {
    const base64String = await convertToBase64(event?.target.files[0]);
    formik.setFieldValue("image", base64String);
  };

  return (
    <Container className="mt-3">
      <h2 className="title-form">{`${!props.news ? 'Crear' : 'Editar'
        } novedad`}</h2>
      <div className="mt-5">
        <Form className="form" onSubmit={formik.handleSubmit}>
          <Form.Group controlId="title" className="mt-2 mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formik.values.title || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="mt-1" style={errorsStyles}>
                {formik.errors.title}
              </div>
            ) : null}
          </Form.Group>

          <Form.Group controlId="content" className="mt-3 mb-3">
            <Form.Label>Contenido</Form.Label>
            <CKEditor
              placeholder="Contenido"
              editor={ClassicEditor}
              data={formik.values.content || ''}
              name="content"
              type="text"
              onChange={(e, editor) =>
                formik.setFieldValue('content', editor.getData())
              }
            />
            {formik.touched.content && formik.errors.content ? (
              <div className="mt-1" style={errorsStyles}>
                {formik.errors.content}
              </div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="category" className="mt-3 mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="category"
              value={formik.values.category || 0}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}>
              <option value={0} disabled>
                Seleccionar categoría
              </option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
            {formik.touched.category && formik.errors.category ? (
              <div className="mt-1" style={errorsStyles}>
                {formik.errors.category}
              </div>
            ) : null}
          </Form.Group>
          <Form.Group controlId="image" className="mt-3 mb-3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              accept="image/png, image/jpeg"
              type="file"
              name="defaultImage"
              onChange={(event) => handleImageChange(event)}
            />
            {formik.touched.image && formik.errors.image ? (
              <div className="mt-1" style={errorsStyles}>
                {formik.errors.image}
              </div>
            ) : null}
          </Form.Group>

          <Button type="submit" className="w-100 mb-2" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
            {!props.news ? 'Crear' : 'Editar'}
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default NewsForm;
