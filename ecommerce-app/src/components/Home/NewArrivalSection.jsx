import { Card } from "@components/ui/Card";
import homeData from "@data/home.json";
import styles from "@pages/Home/HomePage.module.css";
import { HomeSectionTitle } from "./HomeSectionTitle";

export function NewArrivalSection() {
  return (
    <section className={styles.section}>
      <HomeSectionTitle eyebrow="Featured" title="New Arrival" />
      <div className={styles.arrivalGrid}>
        {homeData.newArrival.map((item) => (
          <Card
            key={item.title}
            className={`${styles.arrivalCard} ${item.large ? styles.large : styles.small} ${item.women ? styles.womenCard : ""}`.trim()}
          >
            <img src={item.image} alt={item.title} className={styles.arrivalImage} />
            <div className={styles.arrivalContent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className={styles.linkButton}>Shop Now</button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
