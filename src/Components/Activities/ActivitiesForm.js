import React from 'react';
import { putData, postData } from '../../Services/activitiesService';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Form, useField } from 'formik';
import { successMsg, warningMsg } from '../Alerts/Alert';
import * as Yup from 'yup';
import '../FormStyles.css';

const TextInput = ({ label, foc, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error alert alert-danger">{meta.error}</div>
      ) : null}
    </>
  );
};

const FileInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="file-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error alert alert-danger">{meta.error}</div>
      ) : null}
    </>
  );
};

const ActivitiesForm = props => {
  console.log(props);
  const activity = props.activity
    ? {
      id: props.activity.id,
      title: props.activity.name,
      description: props.activity.description,
      /* image: props.activity.image, */
    }
    : {
      title: '',
      description: '',
      image: '',
    };

  let timeout = null;
  let data = '';

  const handleEditor = (e, editor) => {
    const desc = editor.getData();
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      data = desc;
    }, 1000);
  };

  /* const handleReady = editor => {
    editor.setData(activity.content);
  }; */

  const createActivity = (values, id) => {
    if (!props.activity) {
      try {
        postData({
          name: values.title,
          description: values.description,
          image: values.image,
          user_id: 0,
          category_id: 1,
          created_at: Date(),
        });
        successMsg('Creacion exitosa');
      } catch (err) {
        warningMsg('Creacion fallida');
      }
    } else {
      try {
        putData(
          {
            id: id,
            name: values.title,
            description: values.description,
            image: values.image,
            user_id: 0,
            category_id: 1,
            created_at: Date(),
          },
          id
        );
        successMsg('Edicion exitosa');
      } catch (err) {
        warningMsg('Edicion fallida');
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <h2 className="title-form">{`${!props.activity ? 'Crear' : 'Editar'
          } actividad`}</h2>
        <div className="row">
          <div className="col-12 mt-5 pt-3">
            <Formik
              initialValues={activity}
              validationSchema={Yup.object({
                title: Yup.string().required('Ingresar titulo'),
                image: Yup.mixed()
                  .required('Ingresar imagen')
                  .test('fileType', 'Unsupported File Format', value => {
                    if (value) {
                      if (value.includes('png')) {
                        return true;
                      } else if (value.includes('jpg')) {
                        return true;
                      } else if (value.includes('jpeg')) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                  }),
              })}
              onSubmit={(values, { setFieldValue }) => {
                createActivity(values);
                // setFieldValue('title', '');
                // setFieldValue('image', '');
              }}>
              <Form>
                <TextInput
                  label="Título"
                  name="title"
                  type="text"
                  className="form-control mt-3 mb-3"
                />
                <div className="mb-3">
                  <div className="mb-3">
                    <span>Descripción</span>
                  </div>

                  <CKEditor
                    label="Descripción"
                    editor={ClassicEditor}
                    data={activity.description || ""}
                    name="description"
                    type="text"
                    placeholder="Descripción"
                    onChange={handleEditor}
                    className="form-control"
                  />
                </div>

                <FileInput
                  label="Imagen"
                  name="image"
                  type="file"
                  placeholder="Imagen"
                  accept=".jpg, .jpeg, .png"
                  className="form-control mt-3 mb-3"
                />

                <button
                  type="submit"
                  className="form-control btn btn-primary mt-3 mb-3">
                  {!props.activity ? 'Crear' : 'Editar'}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesForm;
