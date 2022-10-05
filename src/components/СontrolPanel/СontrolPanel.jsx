import Button from '../UI/Button'
import styles from './СontrolPanel.module.css'
const СontrolPanel = () => {
  return (
    <div className={styles.panel}>
      <Button>Reset Todos</Button>
      <Button>Clear done Todos</Button>
    </div>
  )
}

export default СontrolPanel
