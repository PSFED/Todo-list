import styles from './Todo.module.css'
const Todo = ({ text }) => {
  return <div className={styles.task}>{text}</div>
}

export default Todo
