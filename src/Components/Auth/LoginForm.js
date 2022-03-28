import React, { useState } from 'react';
import '../FormStyles.css';
import { Modal, Spinner } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { logIn } from '../../Services/authService';
import { regUser, roleMe, isAuth } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { warningMsg } from './../Alerts/Alert';

const LoginForm = ({ close, show }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = e => {
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
      initialValues.email === '' ||
      !validateEmail.test(initialValues.email)
    ) {
      errors.email = 'Ingresa una direccion de email válida';
    }

    // Si la contraseña esta vacia,
    // es menor a 6 caracteres o no tiene el formato requerido da error
    // (minimo 1 letra, 1 numero y 1 simbolo)

    if (
      initialValues.password === '' ||
      initialValues.password.length < 6 ||
      !validatePassword.test(initialValues.password)
    ) {
      errors.password =
        'La contraseña debe tener una longitud mínima de 6 caracteres, y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%)';
    }

    return errors;
  };

  const handleSubmit = async e => {
    setIsLoading(true);
    const res = await logIn({
      email: initialValues.email,
      password: initialValues.password,
    });

    if (res.data.data) {
      const { token, user } = res.data.data;

      const { role_id } = user;

      dispatch(regUser({ token, user }));
      dispatch(roleMe(role_id));
      dispatch(isAuth(res.data.success));

      localStorage.setItem('token', token);
      localStorage.setItem('userName', user.name);
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoading(false);
      close();
    } else {
      warningMsg("Email o contraseña incorrectos");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}>
          {() => (
            <Form className="d-flex flex-column">
              <Field
                className="input-field rounded-pill m-3"
                name="email"
                type="email"
                value={initialValues.name}
                onChange={handleChange}
                placeholder="Email"></Field>
              <ErrorMessage component="div" className="mx-3" name="email" />
              <Field
                className="input-field rounded-pill m-3"
                name="password"
                type="password"
                value={initialValues.password}
                onChange={handleChange}
                placeholder="Contraseña"></Field>
              <ErrorMessage component="div" className="mx-3" name="password" />
              <button className="submit-btn rounded-pill m-2" type="submit" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
                {isLoading ? <Spinner className="spinner-border"></Spinner> : "Iniciar Sesión"}
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default LoginForm;