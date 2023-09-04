import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className='createTodoButton'
        onClick={(event)=>{console.log('hola');}}>+</button>
    );
}

export {CreateTodoButton};