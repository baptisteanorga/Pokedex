import React from 'react';



const Titre = props => {
    const { titre, description, status } = props;
    return(
        <li>
            <h2>{titre}</h2>
            <div className= { `pastille ${!status ? 'green' : 'red'}`}></div>
            <p>{description}</p>
            <p>{status}</p>
        </li>
    );
};

export default Titre;