import React, { useState, useEffect } from 'react';
import '../../Components/FormStyles.css';
import axios from 'axios';

const NewsForm = () => {
    const [initialValues, setInitialValues] = useState({
        title: '',
        content: '',
        category: '',
        image: ''
    });
    const [categories, setCategories] = useState([]);

    const handleChange = (e) => {
        if(e.target.name === 'title') {
            setInitialValues({...initialValues, title: e.target.value});
        } if(e.target.name === 'content') {
            setInitialValues({...initialValues, content: e.target.value});
        } if(e.target.name === 'category') {
            setInitialValues({...initialValues, category: e.target.value});
        } if (e.target.name === 'image') {
            setInitialValues({...initialValues, image: e.target.value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }

    useEffect(() => {
        const request = axios.get("http://ongapi.alkemy.org/api/categories");
        request.then(response => setCategories(response.data.data));
    }, []);

    return (
    <div>
        <h2 className='title-form'>Crear/Editar novedad</h2>
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="title" value={initialValues.title || ''} onChange={handleChange} ></input>
            <input className="input-field" type="text" name="content" value={initialValues.content || ''} onChange={handleChange} ></input>
            <select className="select-field" name="category" value={initialValues.category || ''} onChange={handleChange} >
                <option value="" disabled>Seleccionar categoría</option>
                {
                    categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
                }
            </select>
            <input className='input-field' type="file" name="image" accept="image/png, image/jpeg" onChange={handleChange} ></input>
            <button className="submit-btn" type="submit">Crear</button>
        </form>
    </div>
    
    );
}
 
export default NewsForm;