import React from 'react';

//Lo correcto sería poner (props.children) pero poniendo ({children}) hace desustructuración a lo bestia
const Title = ({children}) => (
    <h1 className='title'>{children}</h1> 
);

export default Title;