import aboutData from "@data/about.json";
import styles from "@pages/About/AboutPage.module.css";

export function AboutServicesSection() {
  return (
    <section className={styles.serviceRow}>
      {aboutData.services.map((item) => (
        <div key={item.title} className={styles.serviceItem}>
          <div className={styles.serviceIcon}>
            <img src={item.icon} alt={item.title} className={styles.serviceIconImage} />
          </div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  )
}
