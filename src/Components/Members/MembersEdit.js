import React from "react";
import "../FormStyles.css";
import { useFormik } from "formik";
import * as Yup from "yup";// Poner dentro de la carpeta Service o hacerlo local a cada componente?.
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { create, update } from "../../Services/membersService";
import { convertToBase64 } from './../base64/toBase64';
import { successMsg, warningMsg } from "../Alerts/Alert";

const SchemaValidation = Yup.object().shape({
  name: Yup.string()
    .required("El nombre es requerido")
    .min(4, "El nombre debe tener más de 4 letras"),
  image: Yup.mixed()
    .nullable()
    .required("La imagen es requerida"),
  description: Yup.string()
    .required("La descripción es requerida"),
  facebookUrl: Yup.string()
    .url("Debe ser una URL válida")
    .required("El link es requerido"),
  linkedinUrl: Yup.string()
    .url("Debe ser una URL válida")
    .required("El link es requerido"),
})

const errorsStyles = { color: "red", fontSize: ".875em" };

const MembersEdit = (props) => {
  const member = props.member
    ? {
      id: props.member.id,
      name: props.member.name,
      description: props.member.description,
      facebookUrl: props.member.facebookUrl,
      linkedinUrl: props.member.linkedinUrl,
    }
    : {
      name: "",
      image: "",
      description: "",
      facebookUrl: "",
      linkedinUrl: "",
    };

  const editFormik = useFormik({
    initialValues: member,
    validationSchema: SchemaValidation,
    onSubmit(values) {
      console.log(values)
      const body = {
        name: values.name,
        image: values.image,
        description: values.description,
        facebookUrl: values.facebookUrl,
        linkedinUrl: values.linkedinUrl
      }

      !props.member
        ?
        create(body)
          .then((response) => {
            successMsg("Miembro creado con éxito");
          })
          .catch((error) => {
            console.log(error);
            warningMsg("Error. No se pudo crear el nuevo miembro");
          })

        : update(body, values.id)
          .then((response) => {
            successMsg("Miembro editado con éxito");
            props.close();
          })
          .catch((error) => {
            console.log(error);
            warningMsg("Error. No se pudo editar el miembro");
          });
    }
  });

  const handleImageChange = async (event) => {
    const base64String = await convertToBase64(event?.target.files[0]);
    editFormik.setFieldValue("image", base64String);
  };

  return (
    <Container className="mt-3">
      <h2 className="title-form">{`${!props.member ? "Crear" : "Editar"
        } miembro`}</h2>
      <Form className="form-container" onSubmit={editFormik.handleSubmit}>
        <Form.Group controlId="name" className="mb-2">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" value={editFormik.values.name} placeholder="ej: Pablo Ramirez" onChange={editFormik.handleChange} onBlur={editFormik.handleBlur} />
          {editFormik.touched.name && editFormik.errors.name ? (
            <span className="mt-1" style={errorsStyles}>{editFormik.errors.name}</span>
          ) : null}
        </Form.Group>

        <Form.Group controlId="image" className="mb-2">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" name="image" accept="image/jpg, image/jpeg, image/gif, image/png"
            onChange={(event) => handleImageChange(event)} onBlur={editFormik.handleBlur} />
          {editFormik.touched.image && editFormik.errors.image ? (
            <span className="mt-1" style={errorsStyles}>{editFormik.errors.image}</span>
          ) : null}
        </Form.Group>

        <Form.Group controlId="description" className="mb-2">
          <Form.Label>Descripción</Form.Label>
          <CKEditor
            type="text"
            name="description"
            placeholder="Descripción"
            editor={ClassicEditor}
            data={editFormik.values.description}
            onChange={(e, editor) =>
              editFormik.setFieldValue("description", editor.getData())
            }
          />
          {editFormik.touched.description && editFormik.errors.description ? (
            <span className="mt-1" style={errorsStyles}>{editFormik.errors.description}</span>
          ) : null}
        </Form.Group>

        <Row className="row-cols-1 row-cols-md-2">
          <Col className="mb-2 mb-md-0">
            <Form.Group controlId="facebookUrl" className="mb-2">
              <Form.Label>Facebook (url)</Form.Label>
              <Form.Control
                type="text"
                name="facebookUrl"
                value={editFormik.values.facebookUrl}
                onChange={editFormik.handleChange}
                onBlur={editFormik.handleBlur}
              />
              {editFormik.touched.facebookUrl && editFormik.errors.facebookUrl ? (
                <span className="mt-1" style={errorsStyles}>
                  {editFormik.errors.facebookUrl}
                </span>
              ) : null}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="linkedinUrl" className="mb-2">
              <Form.Label>LinkedIn (url)</Form.Label>
              <Form.Control
                type="text"
                name="linkedinUrl"
                value={editFormik.values.linkedinUrl}
                onChange={editFormik.handleChange}
                onBlur={editFormik.handleBlur}
              />
              {editFormik.touched.linkedinUrl && editFormik.errors.linkedinUrl ? (
                <span className="mt-1" style={errorsStyles}>
                  {editFormik.errors.linkedinUrl}
                </span>
              ) : null}
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit">{!props.member ? "Crear" : "Editar"}</Button>
      </Form>
    </Container>
  );
}

export default MembersEdit;