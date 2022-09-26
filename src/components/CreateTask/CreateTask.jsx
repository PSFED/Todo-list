import { useRef } from 'react'
import styles from './CreateTask.module.css'
const CreateTask = ({ onTask }) => {
  const inputRef = useRef()

  const taskHandler = (e) => {
    e.preventDefault()
    let value = inputRef.current.value
    if (inputRef.current.value.trim().length > 0) {
      onTask({
        id: Math.random() * 100,
        text: value,
      })
    }
  }

  return (
    <form onSubmit={taskHandler} className={styles.form}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Enter new todo"
      />
      <button className="button">Submit</button>
    </form>
  )
}

export default CreateTask
