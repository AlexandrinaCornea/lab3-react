import { Card } from "@components/ui/Card";
import styles from "@pages/Home/HomePage.module.css";

export function HomeProductCard({ item, withDiscount = false }) {
  return (
    <Card className={styles.productCard}>
      <div className={styles.productImage}>
        {item.image ? <img src={item.image} alt={item.name} className={styles.productThumb} /> : "Product"}
      </div>
      {withDiscount ? <span className={styles.discount}>{item.discount}</span> : null}
      <h4>{item.name}</h4>
      <p>
        <span className={styles.price}>{item.price}</span>
        {item.oldPrice ? <span className={styles.oldPrice}>{item.oldPrice}</span> : null}
      </p>
    </Card>
  )
}
