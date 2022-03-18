import { Formik, Form, useField } from 'formik';
import { successMsg } from '../Alerts/Alert';

const errorsStyles = { color: "red", fontSize: ".875em" };

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      {label}
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="mt-1" style={errorsStyles}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const NewsletterForm = () => {
  const validate = (value) => {
    const errors = {};
    if (value.name === "") {
      errors.name = "Campo requerido";
    }
    if (value.lastname === "") {
      errors.lastname = "Campo requerido";
    }
    if (value.email === "") {
      errors.email = "Campo requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
      errors.email = 'Email inválido';
    }
    return errors;
  }

  const handleSubmit = (e) => {
    localStorage.setItem('Newsletter', JSON.stringify(e));
    successMsg("¡Te has suscripto al newsletter!");
    setTimeout(() => window.location.reload(), 2000);
  }

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
        }}
        validate={validate}
        onSubmit={handleSubmit}>
        <Form>
          <TextInput
            name="name"
            type="text"
            placeholder="Nombre"
            className="form-control"
          />
          <TextInput
            name="lastname"
            type="text"
            placeholder="Apellido"
            className="form-control"
          />
          <TextInput
            name="email"
            type="email"
            placeholder="Email"
            className="form-control"
          />
          <div className="text-end">
            <button type="submit" className='btn btn-primary mb-3'>Enviar</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default NewsletterForm;