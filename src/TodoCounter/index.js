import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    return (
        totalTodos !== completedTodos?

        <h1 className='todoCounter'>Has completado
            <span>{completedTodos}</span> de
            <span>{totalTodos}</span> TODOS</h1>

            :

            <h1 className='todoCounter'>No Tienes Ningún TODO Pendiente</h1>
    );
}

export { TodoCounter };