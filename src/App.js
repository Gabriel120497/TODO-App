import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/*const defaultTodos = [
  { text: 'Diseño de proyecto', completed: false },
  { text: 'Diseño de Base de datos', completed: false },
  { text: 'Recopilación de requerimientos', completed: false },
  { text: 'Desarrollo', completed: true },
  { text: 'Implementación', completed: true },
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1');*/

function useLocalStorage(itemName, initialValue) {

  const localStorageitem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageitem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageitem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };
  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length; //La doble negacion '!!' se usa para convertir lo que haya en la variable a un valor booleano
  const totalTodos = todos.length;
  const searchedTodo = todos.filter(todo => {
    return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
  });



  const completeTodo = (text) => {
    const newTodos = [...todos];//'...' crea una copia de un objeto en este caso se crea una copia de todos
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];//'...' crea una copia de un objeto en este caso se crea una copia de todos
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodo.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
