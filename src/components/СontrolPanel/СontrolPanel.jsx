import styles from './СontrolPanel.module.css'
const СontrolPanel = () => {
  return (
    <div className={styles.panel}>
      <button className="button">Reset Todos</button>
      <button className="button">Clear done Todos</button>
    </div>
  )
}

export default СontrolPanel
