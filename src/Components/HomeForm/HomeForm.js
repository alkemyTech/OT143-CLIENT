import { Formik, Form, useField} from 'formik';
import * as Yup from 'yup';

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
        </> 
    )
}

export default HomeForm;