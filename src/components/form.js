import React from 'react';

const Form = ({ handleSubmit, value}) => (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <label>Search Pokemon</label>
            <input
            id="filter"
            type="text"
            name="filter"
            />
            <input type="submit" value="Filtrer" />

        </form>
        <p>{value}</p>
    </div>
);

export default Form;