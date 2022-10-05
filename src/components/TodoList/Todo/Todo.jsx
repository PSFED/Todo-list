import styles from './Todo.module.css'
const Todo = ({ text, id, removeTodo }) => {
  return (
    <div className={styles.task} onDoubleClick={() => removeTodo(id)}>
      {text}
    </div>
  )
}

export default Todo
