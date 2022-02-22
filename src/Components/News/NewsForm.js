import React, { useState, useEffect } from "react";
import "../../Components/FormStyles.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewsForm = () => {
  const [categories, setCategories] = useState([]);

  const schema = Yup.object({
    title: Yup.string()
      .required("El titulo es requerido")
      .min(4, "El título debe contener una longitud mínima de 4 caracteres"),
    content: Yup.string().required("El contenido es requerido"),
    category: Yup.number()
      .required()
      .positive("Debe seleccionar una categoría"),
    image: Yup.string().required("La imagen es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      category: 0,
      image: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const request = axios.get("http://ongapi.alkemy.org/api/categories");
    request.then((response) => setCategories(response.data.data));
  }, []);

  return (
    <div>
      <h2 className="title-form">Crear/Editar novedad</h2>
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Titulo</label>
        <input
          className="input-field"
          type="text"
          name="title"
          value={formik.values.title || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
        <label htmlFor="content">Contenido</label>
        <input
          className="input-field"
          type="text"
          name="content"
          value={formik.values.content || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.content && formik.errors.content ? (
          <div>{formik.errors.content}</div>
        ) : null}
        <label htmlFor="category">Categoría</label>
        <select
          className="select-field"
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
        </select>
        {formik.touched.category && formik.errors.category ? (
          <div>{formik.errors.category}</div>
        ) : null}
        <label htmlFor="image">Imagen</label>
        <input
          className="input-field"
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          value={formik.values.image || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.image && formik.errors.image ? (
          <div>{formik.errors.image}</div>
        ) : null}
        <button className="submit-btn" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
};

export default NewsForm;
