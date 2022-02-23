import React, { useState, useEffect } from "react";
import "../../Components/FormStyles.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const FORMAT_SUPPORTED = ["image/png", "image/jpg", "image/jpeg"];
const schema = Yup.object().shape({
  title: Yup.string()
    .required("El título es requerido")
    .min(4, "El título debe contener una longitud mínima de 4 caracteres"),
  content: Yup.string().required("El contenido es requerido"),
  category: Yup.number().required().positive("Debe seleccionar una categoría"),
  image: Yup.mixed()
    .required("La imagen es requerida")
    .test(
      "fileType",
      "Formato de imagen inválido",
      (value) => value && FORMAT_SUPPORTED.includes(value.type)
    ),
});

const errorsStyles = { color: "red", fontSize: ".875em" };

const NewsForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      category: 0,
      image: "",
    },
    validationSchema: schema,
    onSubmit(values) {
      console.log(values);
    },
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const request = axios.get("http://ongapi.alkemy.org/api/categories");
    request.then((response) => setCategories(response.data.data));
  }, []);

  return (
    <div>
      <h2 className="title-form">Crear/Editar novedad</h2>
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
          <Form.Control
            type="text"
            name="content"
            value={formik.values.content || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            onChange={(e) => {
              formik.setFieldValue("image", e.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.image}
            </div>
          ) : null}
        </Form.Group>

        <Button type="submit">Crear</Button>
      </Form>
    </div>
  );
};

export default NewsForm;
