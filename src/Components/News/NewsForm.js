import React, { useState, useEffect } from "react";
import "../../Components/FormStyles.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { create, update } from "../../Services/news";
import { warningMsg } from "../Alerts/Alert.js";

const BASE_URL = "http://ongapi.alkemy.org/api";

const schema = Yup.object().shape({
  title: Yup.string()
    .required("El título es requerido")
    .min(4, "El título debe contener una longitud mínima de 4 caracteres"),
  content: Yup.string().required("El contenido es requerido"),
  category: Yup.number().required().positive("Debe seleccionar una categoría"),
  image: Yup.string()
    .url("La imagen debe ser una URL válida")
    .required("La imagen es requerida"),
});

const errorsStyles = { color: "red", fontSize: ".875em" };

const NewsForm = (props) => {
  const news = props.news
    ? {
      id: props.news.id,
      title: props.news.name,
      content: props.news.content,
      category: props.news["category_id"] || 0,
      image: props.news.image,
    }
    : {
      title: "",
      content: "",
      category: 0,
      image: "",
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
        ?
        create(body)
          .then((response) => {
            console.log(response);
            alert("Novedad creada con éxito");
          })
          .catch((error) => {
            console.log(error);
            warningMsg("Error. No se pudo crear la novedad");
          })

        : update(body, news.id)
          .then((response) => {
            console.log(response);
            alert("Novedad editada con éxito");
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
      .then((response) => setCategories(response.data.data))
      .catch((error) => {
        console.log(error);
        warningMsg("Error. No se pudo cargar las categorías");
      });
  }, []);

  return (
    <Container className="mt-3">
      <h2 className="title-form">{`${!props.news ? "Crear" : "Editar"
        } novedad`}</h2>
      <Form className="form-container" onSubmit={formik.handleSubmit}>
        <Form.Group controlId="title" className="mb-2">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formik.values.title || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.title}
            </div>
          ) : null}
        </Form.Group>

        <Form.Group controlId="content" className="mb-2">
          <Form.Label>Contenido</Form.Label>
          <CKEditor
            placeholder="Contenido"
            editor={ClassicEditor}
            data={formik.values.content || ""}
            name="content"
            type="text"
            onChange={(e, editor) =>
              formik.setFieldValue("content", editor.getData())
            }
          />
          {formik.touched.content && formik.errors.content ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.content}
            </div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="category" className="mb-2">
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            name="category"
            value={formik.values.category || 0}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value={0} disabled>
              Seleccionar categoría
            </option>
            {categories.map((category) => (
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
        <Form.Group controlId="image" className="mb-2">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            name="image"
            type="url"
            value={formik.values.image || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.image}
            </div>
          ) : null}
        </Form.Group>

        <Button type="submit">{!props.news ? "Crear" : "Editar"}</Button>
      </Form>
    </Container>
  );
};

export default NewsForm;
