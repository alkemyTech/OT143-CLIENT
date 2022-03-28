import React, { useState } from "react";
import "../FormStyles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { regUser } from "../../features/auth/authSlice";
import { postReg } from "../../Services/authService";
import TermsAndConditionsModal from "../Modal/TermsAndConditionsModal";
import TermsAndConditionsONG from "../TermsAndConditions/TermsAndConditionsONG";
import { Modal } from "react-bootstrap";

const RegisterForm = ({ close, show }) => {
  const [checked, setChecked] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };

  //   Formula para validar todos los campos.
  //   Que todos sean requeridos, longitud mínima e igualdad de contraseñas

  const validate = () => {
    let errors = {};

    // Expresion regular para validar que al contraseña tenga al menos una letra, un numero y un simbolo especial

    const validatePassword = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]/
    );

    if (initialValues.name === "") {
      errors.name = "Introduce un nombre";
    }

    if (initialValues.lastName === "") {
      errors.lastName = "Introduce un apellido";
    }

    if (initialValues.email === "") {
      errors.email = "Introduce un email";
    }

    if (initialValues.password === "") {
      errors.password = "Introduce una contraseña";
    }

    if (initialValues.confirmPassword === "") {
      errors.confirmPassword = "Confirma tu contraseña";
    }

    if (initialValues.password.length < 6) {
      errors.password =
        "La contraseña debe tener una longitud mínima de 6 caraceteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%)";
    }

    if (!validatePassword.test(initialValues.password)) {
      errors.password =
        "La contraseña debe tener una longitud mínima de 6 caraceteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%)";
    }

    if (initialValues.confirmPassword !== initialValues.password) {
      errors.confirmPassword = "Las contraseñas deben ser iguales";
    }

    return errors;
  };

  //   Funcion para submit

  const handleSubmit = async (e) => {
    const res = await postReg({
      name: initialValues.name,
      email: initialValues.email,
      password: initialValues.password,
    });

    const { token, user } = res.data.data;

    dispatch(regUser({ token, user }));

    localStorage.setItem("token", `${token}`);

    localStorage.setItem("user", user.name);

    if (res.data.data) {
      close();
    }
  };

  const handleCheckbox = (e) => {
    setChecked(e.target.checked);

  };
  
  return (
    <Modal show={show} onHide={close} >
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {() => (
          <Form className="form-control card">
            <Field
              className="input-field  rounded-pill m-2"
              name="name"
              value={initialValues.name}
              placeholder="Nombre"
              type="text"
              onChange={handleChange}
            />
            <ErrorMessage component="div" className="mx-3" name="name" />

            <Field
              className="input-field  rounded-pill m-2"
              name="lastName"
              value={initialValues.lastName}
              placeholder="Apellido"
              type="text"
              onChange={handleChange}
            />

            <ErrorMessage component="div" className="mx-3" name="lastName" />

            <Field
              className="input-field  rounded-pill m-2"
              name="email"
              value={initialValues.email}
              placeholder="Email"
              type="email"
              onChange={handleChange}
            />
            <ErrorMessage component="div" className="mx-3" name="email" />

            <Field
              className="input-field  rounded-pill m-2"
              name="password"
              value={initialValues.password}
              placeholder="Contraseña"
              type="password"
              onChange={handleChange}
            />
            <ErrorMessage component="div" className="mx-3" name="password" />

            <Field
              className="input-field  rounded-pill m-2"
              name="confirmPassword"
              value={initialValues.confirmPassword}
              placeholder="Confirmar contraseña"
              type="password"
              onChange={handleChange}
            />
            <ErrorMessage
              component="div"
              className="mx-3"
              name="confirmPassword"
            />
            <div className="text-center">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckbox}
              className="m-1"
              onClick={() => {
                setChecked(true);
              }}
            /> Aceptar terminos y condiciones
            {checked ? <TermsAndConditionsONG /> : null}
            </div>
                 
       
            <button
              disabled={checked === !true}
              type="submit"
              className="btn btn-primary rounded-pill m-2 "
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>

    </Modal>
  );
};

export default RegisterForm;
