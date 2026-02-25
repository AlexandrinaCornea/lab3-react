import { Button } from "@components/ui/Button";
import homeData from "@data/home.json";
import styles from "@pages/Home/HomePage.module.css";

export function MusicBannerSection() {
  return (
    <section className={styles.musicBanner}>
      <div>
        <p>{homeData.musicBanner.eyebrow}</p>
        <h2>{homeData.musicBanner.title}</h2>
        <Button variant="success">Buy Now!</Button>
      </div>
      <img src={homeData.musicBanner.image} alt="JBL speaker" className={styles.musicImage} />
    </section>
  )
}
