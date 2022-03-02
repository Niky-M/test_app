import React from 'react'
import ToDoList from './ToDo/ToDoList';

function App()
{
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: false, title: 'Купить молоко' },
    { id: 3, completed: false, title: 'Купить масло' }
  ])

  function toggleToDo(id)
  {
    setTodos(
      todos.map(todo =>
      {
        if (todo.id === id)
        {
          todo.completed = !todo.completed
        }
        return todo
      }))

  }

  return (
    <div className='wrapper'>
      <h1>Reatc tuturial</h1>
      <button className='button'>OK</button>
      <ToDoList todos={todos} onToggle={toggleToDo} />
    </div>
  )
}

export default App;
