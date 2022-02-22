import React, { useState } from "react";
import "../FormStyles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = () => {
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInitialValues({ ...initialValues, [e.target.name]: e.target.value });
  };



  // Funcion para validar campos y el formato requerido de cada uno

  const validate = () => {
    let errors = {};

    const validateEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    const validatePassword = new RegExp(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]/
    );

    // Si el email está vacio o no cumple el formato, da error

    if (
      initialValues.email === "" ||
      !validateEmail.test(initialValues.email)
    ) {
      errors.email = "Ingresa una direccion de email válida";
    }

    // Si la contraseña esta vacia,
    // es menor a 6 caracteres o no tiene el formato requerido da error
    // (minimo 1 letra, 1 numero y 1 simbolo)

    if (
      initialValues.password === "" ||
      initialValues.password.length < 6 ||
      !validatePassword.test(initialValues.password)
    ) {
      errors.password =
        "La contraseña debe tener una longitud mínima de 6 caracteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%)";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    console.log(initialValues);
    localStorage.setItem("token", "tokenValueExample");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {() => (
          <Form>
            <Field
              className="input-field"
              name="email"
              type="email"
              value={initialValues.name}
              onChange={handleChange}
              placeholder="Email"
            ></Field>
            <ErrorMessage name="email" />
            <Field
              className="input-field"
              name="password"
              type="password"
              value={initialValues.password}
              onChange={handleChange}
              placeholder="Password"
            ></Field>
            <ErrorMessage name="password" />
            <button className="submit-btn" type="submit">
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
