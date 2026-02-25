import styles from "@pages/Home/HomePage.module.css";

export function HomeSectionTitle({ eyebrow, title, right }) {
  return (
    <div className={styles.sectionTitle}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {right}
    </div>
  )
}
