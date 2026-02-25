import { Card } from "@components/ui/Card";
import { Button } from "@components/ui/Button";
import styles from "@pages/Contact/ContactPage.module.css";

export function ContactFormSection() {
  return (
    <Card className={styles.formCard}>
      <div className={styles.grid3}>
        <input placeholder="Your Name *" />
        <input placeholder="Your Email *" />
        <input placeholder="Your Phone *" />
      </div>
      <textarea placeholder="Your Message" />
      <div className={styles.submitRow}>
        <Button>Send Message</Button>
      </div>
    </Card>
  )
}
