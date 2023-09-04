import React from 'react';
import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
        total !== completed?

        <h1 className='todoCounter'>Has completado
            <span>{completed}</span> de
            <span>{total}</span> TODOS</h1>

            :

            <h1 className='todoCounter'>No Tienes Ningún TODO Pendiente</h1>
    );
}

export { TodoCounter };