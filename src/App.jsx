import { useState } from 'react'
import Cheering from './components/Cheering/Cheering'
import CreateTask from './components/CreateTask'
import Container from './components/Layout'
import TodoList from './components/TodoList/TodoList'
import СontrolPanel from './components/СontrolPanel'

const TODOS = [
  {
    id: 1,
    text: 'Drink coffee',
  },
]

function App() {
  const [todo, setTodo] = useState(TODOS)

  const taskHandler = (task) => {
    setTodo((prevState) => {
      return [...prevState, task]
    })
  }

  return (
    <Container>
      <h1>Todo App</h1>
      <CreateTask onTask={taskHandler} />
      <СontrolPanel />
      <TodoList todo={todo} />
      <Cheering />
    </Container>
  )
}

export default App
