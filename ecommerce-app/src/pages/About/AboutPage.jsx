import {
  AboutStorySection,
  AboutStatsSection,
  AboutTeamSection,
  AboutServicesSection,
} from "@components/About";
import styles from "./AboutPage.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <AboutStorySection />
      <AboutStatsSection />
      <AboutTeamSection />
      <AboutServicesSection />
    </div>
  )
}
