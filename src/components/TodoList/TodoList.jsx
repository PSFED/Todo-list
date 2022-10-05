import Todo from './Todo/Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className={styles.inner}>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            removeTodo={removeTodo}
            id={todo.id}
            text={todo.text}
          />
        )
      })}
    </div>
  )
}

export default TodoList
