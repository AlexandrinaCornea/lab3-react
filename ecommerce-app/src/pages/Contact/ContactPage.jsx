import { Breadcrumb } from "@components/layout/Breadcrumb/Breadcrumb";
import { ContactInfoSection, ContactFormSection } from "@components/Contact";
import styles from "./ContactPage.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Breadcrumb current="Contact" />
      <section className={styles.wrap}>
        <ContactInfoSection />
        <ContactFormSection />
      </section>
    </div>
  )
}
