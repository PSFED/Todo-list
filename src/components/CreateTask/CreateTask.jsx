import { useState } from 'react'
import Button from '../UI/Button'
import styles from './CreateTask.module.css'
const CreateTask = ({ addTodo }) => {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (text.trim().length > 0) {
      addTodo({
        id: Math.random() * 100,
        text: text,
      })
    }
    setText('')
  }

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter new todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button>Submit</Button>
    </form>
  )
}

export default CreateTask
