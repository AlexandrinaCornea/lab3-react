import { Breadcrumb } from "@components/layout/Breadcrumb/Breadcrumb";
import aboutData from "@data/about.json";
import styles from "@pages/About/AboutPage.module.css";

export function AboutStorySection() {
  return (
    <>
      <Breadcrumb current="About" />
      <section className={styles.story}>
        <div>
          <h1>{aboutData.storyTitle}</h1>
          {aboutData.storyParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div className={styles.storyImage}>
          <img src={aboutData.storyImage} alt="About story" className={styles.storyImageTag} />
        </div>
      </section>
    </>
  )
}
