import { useState } from 'react'
// import Cheering from './components/Cheering/Cheering'
import CreateTask from './components/CreateTask'
import Container from './components/Layout'
import TodoList from './components/TodoList/TodoList'
import СontrolPanel from './components/СontrolPanel'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos((prevState) => {
      return [...prevState, text]
    })
  }

  const removeTodoHandler = (id) => {
    setTodos((prevState) => {
      return prevState.filter((task) => task.id !== id)
    })
  }

  return (
    <Container>
      <h1>Todo App</h1>
      <CreateTask addTodo={addTodoHandler} />
      <СontrolPanel />
      {todos.length ? (
        <TodoList removeTodo={removeTodoHandler} todos={todos} />
      ) : (
        <h2>Todo list is empty</h2>
      )}
      {/* <Cheering /> */}
    </Container>
  )
}

export default App
