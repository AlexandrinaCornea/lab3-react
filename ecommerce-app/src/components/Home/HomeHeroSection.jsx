import homeData from "@data/home.json";
import { Button } from "@components/ui/Button";
import styles from "@pages/Home/HomePage.module.css";

export function HomeHeroSection() {
  return (
    <section className={styles.hero}>
      <aside className={styles.sideCategories}>
        {homeData.categories.map((category) => (
          <p key={category}>{category}</p>
        ))}
      </aside>
      <div className={styles.heroBanner}>
        <div>
          <div className={styles.heroContent}>
            <img src={homeData.hero.appleLogo} alt="apple-logo"/>
            <p>{homeData.hero.subtitle}</p>
          </div>
          <h1>{homeData.hero.title}</h1>
          <Button>Shop Now</Button>
        </div>
        <img src={homeData.hero.heroImage} alt="iphone" />
      </div>
    </section>
  )
}
