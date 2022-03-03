import React from 'react'
import ToDoList from './ToDo/ToDoList';
import Context from './context/context';
import AddToDo from './ToDo/AddToDo';

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

  function removeToDo(id)
  {
    setTodos(todos.filter(todo => todo.id != id))
  }

  function addToDo(title)
  {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false
      }
    ]))
  }

  return (
    <Context.Provider value={{ removeToDo }}>
      <div className='wrapper'>
        <h1>Reatc tuturial</h1>
        <AddToDo onCreat={addToDo} />
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleToDo} />
        ) : (
          <p>Нет задач</p>
        )}


        <button className='button'>Добавить задачу</button>
      </div>
    </Context.Provider>
  )
}

export default App;
