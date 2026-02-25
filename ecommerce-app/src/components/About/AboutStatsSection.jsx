import { Card } from "@components/ui/Card";
import aboutData from "@data/about.json";
import styles from "@pages/About/AboutPage.module.css";

export function AboutStatsSection() {
  return (
    <section className={styles.stats}>
      {aboutData.stats.map((item) => (
        <Card key={item.label} className={`${styles.statCard} ${item.highlight ? styles.highlight : ""}`.trim()}>
          <div className={styles.statIconWrap}>
            <img src={item.icon} alt={item.label} className={styles.statIcon} />
          </div>
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </Card>
      ))}
    </section>
  )
}
