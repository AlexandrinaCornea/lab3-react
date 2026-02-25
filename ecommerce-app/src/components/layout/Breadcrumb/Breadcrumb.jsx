import styles from './Breadcrumb.module.css'

export function Breadcrumb({ current }) {
  return (
    <div className={styles.breadcrumb}>
      <span>Home</span>
      <span>/</span>
      <span className={styles.current}>{current}</span>
    </div>
  )
}
