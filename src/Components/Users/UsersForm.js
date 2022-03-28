import React from "react";
import "../FormStyles.css";
import { create, update } from "../../Services/usersService";
import * as Yup from "yup";
import { Form, Button, Container } from 'react-bootstrap';
import { warningMsg, successMsg } from '../Alerts/Alert';
import { useFormik } from 'formik';

const schema = Yup.object().shape({
  name: Yup.string()
    .required("El campo nombre es requerido")
    .min(4, "El campo nombre debe tener más de 4 letras"),
  email: Yup.string().email().required("El campo descripción es requerido"),
  password: Yup.string().min(6).required(),
  confirmPassword: Yup.string().min(6).required(),
});

const UserForm = (props) => {

  const user = props.user
    ? {
      id: props.user.id,
      name: props.user.name,
      email: props.user.email,
      password: props.user.password,
      confirmPassword: props.user.confirmPassword,
    }
    : {
      id: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };


  // const handleSubmit = async (e) => {

  //   if (initialValues.password === initialValues.confirmPassword) {
  //     create({
  //       name: initialValues.name,
  //       email: initialValues.email,
  //       email_verified_at: "2022-03-17T16:07:57.300Z",
  //       password: initialValues.password,
  //       role_id: initialValues.role_id,
  //     });
  //   } else {
  //     return null;
  //   }
  // };

  const formik = useFormik({
    initialValues: user,
    validationSchema: schema,
    onSubmit: values => {
      !props.user
        ?
        create(values).then(response => {
          console.log(response);
          successMsg('Usuario creado con éxito');
        })
          .catch(error => {
            console.log(error);
            warningMsg('No se pudo crear el usuario');
          })
        :
        update(values, values.id).then(response => {
          console.log(response);
          successMsg('Usuario editado con éxito');
        })
          .catch(error => {
            console.log(error);
            warningMsg('No se pudo editar el usuario');
          });
    },
  });

  return (
    <Container className="mt-4">
      <h2 className="title-form">{`${!props.user ? "Crear" : "Editar"
        } usuario`}</h2>
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
              value={formik.values.name || ""}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="mt-1">{formik.errors.name}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mt-2 mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email || ""}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="mt-1">{formik.errors.email}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mt-2 mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password || ""}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="mt-1">{formik.errors.password}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mt-2 mb-3">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword || ""}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="mt-1">{formik.errors.confirmPassword}</div>
            ) : null}
          </Form.Group>
          <Button
            type="submit"
            className="w-100 mb-2 mt-3"
            style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}
          >
            {!props.user ? "Crear" : "Editar"}
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default UserForm;
