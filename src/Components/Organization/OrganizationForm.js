import React, { useEffect, useState } from "react";
import "../../Components/FormStyles.css";
/* import { useFormik } from "formik";
import * as Yup from "yup"; */
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import organizationService from "../../Services/organization";
import { successMsg, warningMsg } from "../Alerts/Alert";
import { convertToBase64 } from './../base64/toBase64';

/* const FORMAT_SUPPORTED = ["image/png", "image/jpg", "image/jpeg"]; */

/* const schema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  logo: Yup.mixed()
    .required("El logo es requerido")
    .test(
      "fileType",
      "Formato de imagen inválido",
      (value) => value && FORMAT_SUPPORTED.includes(value.type)
    ),
  shortDescription: Yup.string().required("La descripción corta es requerida"),
  longDescription: Yup.string().required("La descripción larga es requerida"),
  facebookUrl: Yup.string()
    .url("Debe ser una URL válida")
    .required("El link es requerido"),
  linkedinUrl: Yup.string()
    .url("Debe ser una URL válida")
    .required("El link es requerido"),
  instagramUrl: Yup.string()
    .url("Debe ser una URL válida")
    .required("El link es requerido"),
  twitterUrl: Yup.string()
    .url("Debe ser una URL válida")
    .required("El link es requerido"),
}); */

/* const errorsStyles = { color: "red", fontSize: ".875em" }; */

const OrganizationForm = () => {
  const [organization, setOrganization] = useState({});

  useEffect(() => {
    organizationService.get().then(res => {
      setOrganization(res);
    }).catch(error => console.log(error));
  }, []);

  /* const formik = useFormik({
    initialValues: organization,
    validationSchema: schema,
    onSubmit(e, values) {
      console.log(values);
    },
  }); */

  const handleChange = (event, name) => {
    setOrganization({
      ...organization,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(organization);
    e.preventDefault();

    if (organization.name !== "" && organization.logo !== "" && organization.short_description !== ""
      && organization.long_description !== "" && organization.facebookUrl !== "" && organization.instagramUrl !== ""
      && organization.linkedinUrl !== "" && organization.twitterUrl !== "") {

      organizationService.update(organization, organization.id).then(res => {
        console.log(res);
        successMsg("Datos editados con éxito.");
      }).catch(error => {
        console.log(error);
        warningMsg("Error. No se pudo editar los datos");
      });
    }
    else {
      warningMsg("Complete todos los campos");
    }
  };

  const handleImageChange = async (event, name) => {
    const base64String = await convertToBase64(event?.target.files[0]);
    setOrganization({
      ...organization,
      [name]: base64String,
    });
  };

  console.log(organization);

  return (
    <Container className="mb-3">
      <h2 className="title-form">Editar datos</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mb-2">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={organization.name}
            onChange={(e) => handleChange(e, "name")}
          />
          {/* {formik.touched.name && formik.errors.name ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.name}
            </div>
          ) : null} */}
        </Form.Group>


        <Form.Group controlId="logo" className="mb-2">
          <Form.Label>Logo</Form.Label>
          <Form.Control
            name="logo"
            type="file"
            accept=".png, .jpg"
            onChange={(event) => handleImageChange(event, "logo")}
          />
          {/* {formik.touched.logo && formik.errors.logo ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.logo}
            </div>
          ) : null} */}
        </Form.Group>

        <Form.Group controlId="short-description" className="mb-2">
          <Form.Label>Descripción corta</Form.Label>
          <CKEditor
            editor={ClassicEditor}
            data={organization.short_description}
            value={organization.short_description}
            onChange={(event, editor) => {
              const data = editor.getData();
              setOrganization((prevOrganizacion) => ({
                ...prevOrganizacion,
                short_description: data,
              }));
            }}
          />
          {/* {formik.touched.shortDescription && formik.errors.shortDescription ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.shortDescription}
            </div>
          ) : null} */}
        </Form.Group>
        <Form.Group controlId="long-description" className="mb-2">
          <Form.Label>Descripción larga</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            name="long_description"
            value={organization.long_description}
            onChange={(e) => handleChange(e, "long_description")}
          />
          {/* {formik.touched.longDescription && formik.errors.longDescription ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.longDescription}
            </div>
          ) : null} */}
        </Form.Group>
        <Row className="row-cols-1 row-cols-md-2">
          <Col className="mb-2 mb-md-0">
            <Form.Group controlId="facebook" className="mb-2">
              <Form.Label>Facebook (url)</Form.Label>
              <Form.Control
                name="facebookUrl"
                value={organization.facebook_url}
                onChange={(e) => handleChange(e, "facebookUrl")}
              />
              {/* {formik.touched.facebookUrl && formik.errors.facebookUrl ? (
                <div className="mt-1" style={errorsStyles}>
                  {formik.errors.facebookUrl}
                </div>
              ) : null} */}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="linkedin" className="mb-2">
              <Form.Label>LinkedIn (url)</Form.Label>
              <Form.Control
                name="linkedinUrl"
                value={organization.linkedin_url}
                onChange={(e) => handleChange(e, "linkedinUrl")}
              />
              {/* {formik.touched.linkedinUrl && formik.errors.linkedinUrl ? (
                <div className="mt-1" style={errorsStyles}>
                  {formik.errors.linkedinUrl}
                </div>
              ) : null} */}
            </Form.Group>
          </Col>
        </Row>

        <Row className="row-cols-1 row-cols-md-2">
          <Col className="mb-2 mb-md-0">
            <Form.Group controlId="instagram" className="mb-2">
              <Form.Label>Instagram (url)</Form.Label>
              <Form.Control
                name="instagramUrl"
                value={organization.instagram_url}
                onChange={(e) => handleChange(e, "instagramUrl")}
              />
              {/* {formik.touched.instagramUrl && formik.errors.instagramUrl ? (
                <div className="mt-1" style={errorsStyles}>
                  {formik.errors.instagramUrl}
                </div>
              ) : null} */}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="twitter" className="mb-2">
              <Form.Label>Twitter (url)</Form.Label>
              <Form.Control
                name="twitterUrl"
                value={organization.twitter_url}
                onChange={(e) => handleChange(e, "twitterUrl")}
              />
              {/* {formik.touched.twitterUrl && formik.errors.twitterUrl ? (
                <div className="mt-1" style={errorsStyles}>
                  {formik.errors.twitterUrl}
                </div>
              ) : null} */}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="text-end">
            <Button type="submit" style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>Editar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default OrganizationForm;
