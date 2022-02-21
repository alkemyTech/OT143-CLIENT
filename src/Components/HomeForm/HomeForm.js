import { Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const HomeForm = ()=>{
    const [value, setValue] = useState("");

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

    const handleInput = (e)=>{
        let InputValue = e.target.value;
        setValue(InputValue)
    }
    const handleChange = (e)=>{
        e.preventDefault()
    }

    return(
        <>
        <Formik 
            initialValues={{
                welcomeText: "",
                image: "",
                textSlide: "" 
            }}
            validationSchema={validationSchemaYup}
            onSubmit={handleChange}>
            <Form >
                <InputField
                name="welcomeText"
                type="text"
                label="Editar texto de bienvenida"
                />
                <span>Editar slides</span>
                <select name="select" onChange={handleInput}>
                    <option value="" >Seleccionar</option>
                    <option value="slide1">Slide n°1</option>
                    <option value="slide2">Slide n°2</option>
                    <option value="slide3">Slide n°3</option>
                </select>

                {(value === "slide1" || "slide2" || "slide3") && 
                <div id={value}>
                    <InputField
                    name="image"
                    type="file"
                    label="Imagen"
                    />
                    <InputField
                    name="textSlide"
                    type="text"
                    label="Texto"
                    />
                </div>}

                <button type="submit">Guardar cambios</button>
            </Form>
        </Formik> 
        </> 
    )
}

export default HomeForm;