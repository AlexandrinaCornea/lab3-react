import homeData from "@data/home.json";
import { Button } from "@components/ui/Button";
import styles from "@pages/Home/HomePage.module.css";
import { HomeSectionTitle } from "./HomeSectionTitle";
import { HomeProductCard } from "./HomeProductCard";

export function ExploreProductsSection() {
  return (
    <section className={styles.section}>
      <HomeSectionTitle eyebrow="Our Products" title="Explore Our Products" />
      <div className={styles.productGrid8}>
        {homeData.explore.map((item) => (
          <HomeProductCard key={item.name} item={item} />
        ))}
      </div>
      <div className={styles.centerAction}>
        <Button>View All Products</Button>
      </div>
    </section>
  )
}
