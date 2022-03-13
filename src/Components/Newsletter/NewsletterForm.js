import { Formik, Form, useField } from 'formik';

const NewsletterForm = ()=>{
  
  const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
      <label>
        {label}
        <input {...field} {...props}/>
      </label>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </>
    );
  };

  const validate = (value)=>{

    const errors = {};
    if(value.name === ""){
      errors.name = "Campo requerido";
    }
    if(value.lastname === ""){
      errors.lastname = "Campo requerido";
    }
    if(value.email === ""){
      errors.email = "Campo requerido";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
      errors.email = 'Email inválido';
    }
    return errors
  }

  const handleSubmit = (e)=>{
    localStorage.setItem('Newsletter', JSON.stringify(e));
  }

  return(
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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 card">
              <TextInput
                name="name"
                type="text"
                placeholder="Nombre"
                className="form-control my-3"
              />
              <TextInput
                name="lastname"
                type="text"
                placeholder="Apellido"
                className="form-control my-3"
              />
              <TextInput
                name="email"
                type="email"
                placeholder="Email"
                className="form-control my-3"
              />
              <div className="text-center">
                <button type="submit" className='btn btn-primary my-3'>Enviar</button>
              </div>
            </div>
          </div>
          
        </div>
      </Form>
    </Formik> 
    </>
  )
}

export default NewsletterForm;