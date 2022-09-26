import Todo from './Todo/Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todo }) => {
  return (
    <div className={styles.inner}>
      {
      todo.map((item) => {
        return <Todo key={item.id} text={item.text} />
      })
      }
    </div>
  )
}

export default TodoList
