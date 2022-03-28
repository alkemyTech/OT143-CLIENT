import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import imagen from './../../images/somosMasOrg.png';
import axios from 'axios';
import { warningMsg } from '../Alerts/Alert';
import { ORGANIZATION_EDIT } from '../../config/router/routes';
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useEffect, useState } from 'react';
import organizationService from '../../Services/organization';

const InputField = ({ controlId, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormGroup controlId={controlId} className="mb-2">
      <FormLabel>{label}</FormLabel>
      {/* <label>
        {label}
      </label> */}
      <FormControl {...field} {...props} />
      {/* <div>
        <input className="form-control" {...field} {...props} />
      </div> */}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormGroup>
  );
};

const OrganizationInfo = () => {
  const [organizationData, setOrganizationData] = useState([]);

  useEffect(() => {
    organizationService.get().then(response => setOrganizationData(prevOrganizacionData => prevOrganizacionData = response));
  }, []);

  return (
    <div className="row my-4">
      <h2 className="text-center mb-4">Datos de la Organización</h2>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">{organizationData.name}</h5>
            <div className="d-flex justify-content-center">
              <img className='card-img-top' src={organizationData.logo} alt="Logo de la organización" style={{ width: "50%" }} />
            </div>
            <h5>Descripción</h5>
            <p className="card-text">{organizationData.long_description}</p>
          </div>
          <div className="card-body text-center">
            <Link to={ORGANIZATION_EDIT}><button className="btn btn-primary" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>Editar datos</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeForm = () => {

  const validationSchemaYup = Yup.object().shape({
    welcomeText: Yup.string()
      .min(20, "El campo debe contener mínimo 20 caracteres"),
  })

  const handleChange = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h2 className="title-form">Editar datos de la Home</h2>
      <Formik
        initialValues={{
          welcomeText: "",
          imageSlideOne: "",
          textSlideOne: "",
          imageSlideTwo: "",
          textSlideTwo: "",
          imageSlideThree: "",
          textSlideThree: "",
        }}
        validationSchema={validationSchemaYup}
        onSubmit={(values) => {
          axios.post(`https://ongapi.alkemy.org/api/organization`, values)
            .then((response) => {
              console.log(response.data)
              alert('Se ha realizado con éxito');
            })
            .catch((error) => {
              console.log(error);
              warningMsg('Hubo un error, no se pudo realizar esta acción');
            });
        }}>
        <Form>
          <div className="row">
            <div className="col mb-2">
              <InputField
                controlId="welcomeText"
                name="welcomeText"
                type="text"
                label="Texto de bienvenida"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="mb-2">
                <span>Slide 1</span>
              </div>
              <InputField
                name="imageSlideOne"
                type="file"
                label="Imagen"
              />
              <InputField
                name="textSlideOne"
                type="text"
                label="Texto"
              />
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-2">
                <span>Slide 2</span>
              </div>
              <InputField
                name="imageSlideTwo"
                type="file"
                label="Imagen"
              />

              <InputField
                name="textSlideTwo"
                type="text"
                label="Texto"
              />
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-2">
                <span className="mb-2">Slide 3</span>
              </div>
              <InputField
                name="imageSlideThree"
                type="file"
                label="Imagen"
              />

              <InputField
                name="textSlideThree"
                type="text"
                label="Texto"
              />
            </div>
          </div>
          <div className="row">
            <div className="col text-end">
              <Button type="submit" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>Editar</Button>
            </div>
          </div>
        </Form>
      </Formik>

      <OrganizationInfo />
    </div>
  );
}

export default HomeForm;