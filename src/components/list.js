import React from 'react';
import Item from './titre';

const List =({data}) =>{
    
    return(
    
    <ul>
       {data.map((appartements, index)=>(
        <Item key={`appartements`+ index}{...appartements} />
        ))}:

    </ul>
    );
}

export default List