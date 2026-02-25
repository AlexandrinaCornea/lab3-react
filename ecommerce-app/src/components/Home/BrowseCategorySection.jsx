import homeData from "@data/home.json";
import { Card } from "@components/ui/Card";
import styles from "@pages/Home/HomePage.module.css";
import { HomeSectionTitle } from "./HomeSectionTitle";

export function BrowseCategorySection() {
  return (
    <section className={styles.section}>
      <HomeSectionTitle eyebrow="Categories" title="Browse By Category" />
      <div className={styles.categoryGrid}>
        {homeData.browse.map((category) => {
          const isCamera = category.label === "Camera";
          const isActive = Boolean(category.active) || isCamera;

          return (
            <Card key={category.label} className={`${styles.categoryCard} ${isActive ? styles.categoryActive : ""}`.trim()}>
              {category.icon ? (
                <img src={category.icon} alt={category.label} className={`${styles.categoryIcon} ${isActive ? styles.categoryIconActive : ""}`.trim()} />
              ) : null}
              {isCamera ? <span className={styles.cameraFallback}>Camera</span> : null}
              <span className={styles.categoryLabel}>{category.label}</span>
            </Card>
          );
        })}
      </div>
    </section>
  )
}
