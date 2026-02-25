import styles from './Card.module.css'

export function Card({ children, className = '' }) {
  return <article className={`${styles.card} ${className}`.trim()}>{children}</article>
}
