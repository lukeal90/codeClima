import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";


const Formulario = ({search, saveSearch, saveListen }) => {

    const [error, saveError] = useState(false)

    const { city } = search;

    const handleChange = c => {
        saveSearch({
            [c.target.name]: c.target.value
        });
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        if (city.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);
        saveListen(true);
    }

    return (
        
        <form
            className="formulario"
            onSubmit={handleSubmit}
        >
            
            <label htmlFor="ciudad">Ciudad:</label>
            <input
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={handleChange}
            />

            <Button
                variant="outline-primary"
                type ="submit"
                value ="Search City"
                
                >Search City
            </Button>

            {error ? <p class="alert alert-danger"> the field is required </p> : null}

        </form>
    )
}

export default Formulario;