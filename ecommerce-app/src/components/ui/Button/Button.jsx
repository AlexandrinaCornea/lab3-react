import styles from './Button.module.css'

export function Button({ children, variant = 'primary', size = 'md', fullWidth = false, type = 'button' }) {
  const className = [styles.button, styles[variant], styles[size], fullWidth ? styles.fullWidth : ''].join(' ').trim()

  return (
    <button type={type} className={className}>
      {children}
    </button>
  )
}
