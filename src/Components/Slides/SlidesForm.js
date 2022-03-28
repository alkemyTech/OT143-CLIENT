import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { emptyField } from '../../features/Slides/slidesSlice';
import { v4 as uuid } from 'uuid';
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

const OrderSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error alert alert-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

const SlidesForm = ({ id }) => {
  const titulo = useSelector(state => state.slides.title);
  const info = useSelector(state => state.slides.description);
  const imagen = useSelector(state => state.slides.image);
  const edicion = useSelector(state => state.slides.edit);
  const vacio = useSelector(state => state.slides.empty);

  let timeout = null;
  let data = '';

  const handleEditor = (e, editor) => {
    const desc = editor.getData();
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (desc !== '') {
        dispatch(emptyField(false));
      }
      data = desc;
    }, 1000);
  };

  const handleReady = editor => {
    editor.setData(info);
  };

  const dispatch = useDispatch();

  const handleBlur = (e, editor) => {
    if (editor.getData() !== '') {
      dispatch(emptyField(false));
    } else {
      dispatch(emptyField(true));
    }
  };

  const createSlide = async (values, id) => {
    if (edicion !== true) {
      try {
        await axios.post('http://ongapi.alkemy.org/api/slides', {
          id: uuid(),
          name: values.title,
          description: data,
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
        await axios.put(`http://ongapi.alkemy.org/api/slides/${id}`, {
          id: id,
          name: values.title,
          description: data,
          image: values.image,
          user_id: 0,
          category_id: 1,
          created_at: Date(),
        });
        successMsg('Edicion exitosa');
      } catch (err) {
        warningMsg('Edicion fallida');
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="title-form">Crear Slide</h2>
          <div className="col-12 mt-5 pt-3">
            <Formik
              initialValues={{
                name: titulo,
                image: imagen,
                order: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('Ingresar titulo'),
                description: Yup.string(),
                order: Yup.string()
                  .oneOf(
                    [
                      '1',
                      '2',
                      '3',
                      '4',
                      '5',
                      '6',
                      '7',
                      '8',
                      '9',
                      '10',
                      '11',
                      '12',
                    ],
                    'Seleccionar orden'
                  )
                  .required('Seleccionar orden'),
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
                createSlide(values);
                // setFieldValue('title', '');
                // setFieldValue('image', '');
              }}>
              <Form>
                <TextInput
                  label="Nombre"
                  name="name"
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
                    data=""
                    name="description"
                    type="text"
                    placeholder="Descripción"
                    onChange={handleEditor}
                    onReady={handleReady}
                    onBlur={handleBlur}
                    className="form-control "
                  />
                  {vacio === true ? (
                    <div className="error alert alert-danger mt-3">
                      Completar descripcion
                    </div>
                  ) : null}
                </div>

                <OrderSelect
                  label="Orden"
                  name="order"
                  className="form-control mt-3 mb-3">
                  <option value="">Seleccionar orden</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </OrderSelect>

                <FileInput
                  label="Imagen"
                  name="image"
                  type="file"
                  placeholder="Imagen"
                  accept=".jpg, .jpeg, .png"
                  className="form-control mt-3 mb-3"
                />
                <img src={info} alt="" />
                <button
                  type="submit"
                  className="form-control btn btn-primary mt-3 mb-3">
                  {edicion === false ? 'Submit' : 'Edit'}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidesForm;
