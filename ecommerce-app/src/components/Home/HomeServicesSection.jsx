import homeData from "@data/home.json";
import styles from "@pages/Home/HomePage.module.css";

export function HomeServicesSection() {
  return (
    <section className={styles.serviceRow}>
      {homeData.services.map((item) => (
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
