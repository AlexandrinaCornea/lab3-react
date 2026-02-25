import {
  HomeHeroSection,
  FlashSalesSection,
  BrowseCategorySection,
  BestSellingSection,
  MusicBannerSection,
  ExploreProductsSection,
  NewArrivalSection,
  HomeServicesSection,
} from "@components/Home";
import styles from "./HomePage.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeHeroSection />
      <FlashSalesSection />
      <BrowseCategorySection />
      <BestSellingSection />
      <MusicBannerSection />
      <ExploreProductsSection />
      <NewArrivalSection />
      <HomeServicesSection />
    </div>
  )
}
