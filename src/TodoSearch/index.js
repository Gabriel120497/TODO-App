import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {searchValue, setSearchValue} =  React.useContext(TodoContext);
    return (
        <input className="TodoSearch"
            placeholder='Buscar TODO'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }} />
    );
}

export { TodoSearch };