import homeData from "@data/home.json";
import { Button } from "@components/ui/Button";
import styles from "@pages/Home/HomePage.module.css";
import { HomeSectionTitle } from "./HomeSectionTitle";
import { HomeProductCard } from "./HomeProductCard";

export function FlashSalesSection() {
  return (
    <section className={styles.section}>
      <HomeSectionTitle eyebrow="Today" title="Flash Sales" />
      <div className={styles.productGrid4}>
        {homeData.flashSales.map((item) => (
          <HomeProductCard key={item.name} item={item} withDiscount />
        ))}
      </div>
      <div className={styles.centerAction}>
        <Button>View All Products</Button>
      </div>
    </section>
  )
}
