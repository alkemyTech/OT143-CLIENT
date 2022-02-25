import React from "react";
import "../../Components/FormStyles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const FORMAT_SUPPORTED = ["image/png", "image/jpg", "image/jpeg"];

const schema = Yup.object().shape({
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
});

const errorsStyles = { color: "red", fontSize: ".875em" };

const OrganizationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      logo: "",
      shortDescription: "",
      longDescription: "",
      facebookUrl: "",
      linkedinUrl: "",
      instagramUrl: "",
      twitterUrl: "",
    },
    validationSchema: schema,
    onSubmit(values) {
      console.log(values);
    },
  });

  return (
    <Container className="mt-3">
      <h2 className="title-form">Editar datos</h2>
      <Form className="form-container" onSubmit={formik.handleSubmit}>
        <Form.Group controlId="name" className="mb-2">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formik.values.name || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.name}
            </div>
          ) : null}
        </Form.Group>

        <Form.Group controlId="logo" className="mb-2">
          <Form.Label>Logo</Form.Label>
          <Form.Control
            name="logo"
            type="file"
            accept=".png, .jpg"
            onChange={(e) => {
              formik.setFieldValue("logo", e.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.logo && formik.errors.logo ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.logo}
            </div>
          ) : null}
        </Form.Group>

        <Form.Group controlId="short-description" className="mb-2">
          <Form.Label>Descripción corta</Form.Label>
          <CKEditor
            editor={ClassicEditor}
            data={formik.values.shortDescription || ""}
            name="shortDescription"
            type="text"
            onChange={(e, editor) =>
              formik.setFieldValue("shortDescription", editor.getData())
            }
          />
          {formik.touched.shortDescription && formik.errors.shortDescription ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.shortDescription}
            </div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="long-description" className="mb-2">
          <Form.Label>Descripción larga</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            name="longDescription"
            value={formik.values.longDescription || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.longDescription && formik.errors.longDescription ? (
            <div className="mt-1" style={errorsStyles}>
              {formik.errors.longDescription}
            </div>
          ) : null}
        </Form.Group>
        <Row className="row-cols-1 row-cols-md-2">
          <Col className="mb-2 mb-md-0">
            <Form.Group controlId="facebook" className="mb-2">
              <Form.Label>Facebook (url)</Form.Label>
              <Form.Control
                name="facebookUrl"
                value={formik.values.facebookUrl || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.facebookUrl && formik.errors.facebookUrl ? (
                <div className="mt-1" style={errorsStyles}>
                  {formik.errors.facebookUrl}
                </div>
              ) : null}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="linkedin" className="mb-2">
              <Form.Label>LinkedIn (url)</Form.Label>
              <Form.Control
                name="linkedinUrl"
                value={formik.values.linkedinUrl || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.linkedinUrl && formik.errors.linkedinUrl ? (
                <div className="mt-1" style={errorsStyles}>
                  {formik.errors.linkedinUrl}
                </div>
              ) : null}
            </Form.Group>
          </Col>
        </Row>

        <Row className="row-cols-1 row-cols-md-2">
          <Col className="mb-2 mb-md-0">
            <Form.Group controlId="instagram" className="mb-2">
              <Form.Label>Instagram (url)</Form.Label>
              <Form.Control
                name="instagramUrl"
                value={formik.values.instagramUrl || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.instagramUrl && formik.errors.instagramUrl ? (
                <div className="mt-1" style={errorsStyles}>
                  {formik.errors.instagramUrl}
                </div>
              ) : null}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="twitter" className="mb-2">
              <Form.Label>Twitter (url)</Form.Label>
              <Form.Control
                name="twitterUrl"
                value={formik.values.twitterUrl || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.twitterUrl && formik.errors.twitterUrl ? (
                <div className="mt-1" style={errorsStyles}>
                  {formik.errors.twitterUrl}
                </div>
              ) : null}
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit">Editar</Button>
      </Form>
    </Container>
  );
};

export default OrganizationForm;
