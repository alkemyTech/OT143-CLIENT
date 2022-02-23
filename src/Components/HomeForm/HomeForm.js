import { Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import imagen  from './../../images/somosMasOrg.png'

const HomeForm = ()=>{

    const InputField = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <>
            <label>
                {label}
                <input {...field} {...props}/>
            </label>
            {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
            ) : null}
        </>
        );
    };
    
    const validationSchemaYup= Yup.object().shape({
        welcomeText: Yup.string()
        .min(20, "El campo debe contener mínimo 20 caracteres"),
    })

    const handleChange = (e)=>{
        e.preventDefault()
    }

    return(
        <>
        <div className="container-fluid mb-4">
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
            onSubmit={handleChange}>
            <Form >
                <p>Texto de bienvenida</p>
                <InputField
                name="welcomeText"
                type="text"
                label="Editar texto"
                />
                
                <p>Slides</p> 
                <span>Slide 1</span>
                <InputField
                name="imageSlideOne"
                type="file"
                label="Imagen"
                />
                <InputField
                name="textSlideOne"
                type="text"
                label="Editar texto"
                />

                <span>Slide 2</span>
                <InputField
                name="imageSlideTwo"
                type="file"
                label="Imagen"
                />
                <InputField
                name="textSlideTwo"
                type="text"
                label="Editar texto"
                />

                <span>Slide 3</span>
                <InputField
                name="imageSlideThree"
                type="file"
                label="Imagen"
                />
                <InputField
                name="textSlideThree"
                type="text"
                label="Editar texto"
                />

                <button type="submit">Guardar cambios</button>
            </Form>
        </Formik> 
        </div>

        <>
        
        
        
        <div className="container  ">
            <div className="row">
                <div className="col">
                <div className="card bg-danger" >
                <div className="card-body">
                    <h3 className="card-title bg-success text-center">Nombre Organizacion</h3>
                    <img className='card-img-top'  src={imagen} alt='ImagenOng'/>
                    <h5>Descripcion</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sequi dignissimos aperiam temporibus libero eveniet enim quos omnis molestias delectus.</p>
                </div>
                <div className="card-body text-center">
                   <Link to="/backoffice/organization/edit" onClick={(e)=>{alert("se redigira a ->  /backoffice/organization/edit")}}><a className="card-link">Edit Organization</a></Link>
                </div>
                </div>

                </div>
            </div>
        </div>
        </>
        </> 
    )
}

export default HomeForm;