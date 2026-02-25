import { Card } from "@components/ui/Card";
import aboutData from "@data/about.json";
import styles from "@pages/About/AboutPage.module.css";

export function AboutTeamSection() {
  return (
    <section className={styles.team}>
      {aboutData.team.map((person) => (
        <Card key={person.name} className={styles.memberCard}>
          <div className={styles.memberPhoto}>
            <img src={person.image} alt={person.name} className={styles.memberImage} />
          </div>
          <h3>{person.name}</h3>
          <p>{person.role}</p>
          <div className={styles.socialRow}>
            <img src={aboutData.socialIcons.instagram} alt="instagram" />
            <img src={aboutData.socialIcons.linkedin} alt="linkedin" />
          </div>
        </Card>
      ))}
    </section>
  )
}
