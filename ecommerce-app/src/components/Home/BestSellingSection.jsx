import homeData from "@data/home.json";
import { Button } from "@components/ui/Button";
import styles from "@pages/Home/HomePage.module.css";
import { HomeSectionTitle } from "./HomeSectionTitle";
import { HomeProductCard } from "./HomeProductCard";

export function BestSellingSection() {
  return (
    <section className={styles.section}>
      <HomeSectionTitle eyebrow="This Month" title="Best Selling Products" right={<Button size="sm">View All</Button>} />
      <div className={styles.productGrid4}>
        {homeData.bestSelling.map((item) => (
          <HomeProductCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}
