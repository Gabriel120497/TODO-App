import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/*const defaultTodos = [
  { text: 'Diseño de proyecto', completed: false },
  { text: 'Diseño de Base de datos', completed: false },
  { text: 'Recopilación de requerimientos', completed: false },
  { text: 'Desarrollo', completed: true },
  { text: 'Implementación', completed: true },
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1');*/

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
