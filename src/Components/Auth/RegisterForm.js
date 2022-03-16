import React, { useState } from "react";
import "../FormStyles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TermsAndConditionsModal from "../Modal/TermsAndConditionsModal";
import TermsAndConditionsONG from "../TermsAndConditions/TermsAndConditionsONG";

const RegisterForm = () => {
  const [checked, setChecked] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

  const handleSubmit = (e) => {
    console.log(initialValues);
    localStorage.setItem("token", "tokenValueExample");
  };

  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {() => (
        <Form>
          <Field
            className="input-field"
            name="name"
            value={initialValues.name}
            placeholder="Nombre"
            type="text"
            onChange={handleChange}
          />
          <ErrorMessage name="name" />

          <Field
            className="input-field"
            name="lastName"
            value={initialValues.lastName}
            placeholder="Apellido"
            type="text"
            onChange={handleChange}
          />

          <ErrorMessage name="lastName" />

          <Field
            className="input-field"
            name="email"
            value={initialValues.email}
            placeholder="Email"
            type="email"
            onChange={handleChange}
          />
          <ErrorMessage name="email" />

          <Field
            className="input-field"
            name="password"
            value={initialValues.password}
            placeholder="Contraseña"
            type="password"
            onChange={handleChange}
          />
          <ErrorMessage name="password" />

          <Field
            className="input-field"
            name="confirmPassword"
            value={initialValues.confirmPassword}
            placeholder="Confirmar contraseña"
            type="password"
            onChange={handleChange}
          />
          <ErrorMessage name="confirmPassword" />
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckbox}
            className="m-1"
            onClick={() => {
              setChecked(true);
            }}
          />
          <TermsAndConditionsModal setChecked={setChecked}/>
          <button disabled={checked === !true} type="submit" className="btn btn-primary">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
