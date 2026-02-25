import { Card } from "@components/ui/Card";
import contactData from "@data/contact.json";
import styles from "@pages/Contact/ContactPage.module.css";

export function ContactInfoSection() {
  return (
    <Card className={styles.infoCard}>
      {contactData.contacts.map((contact) => (
        <div key={contact.title} className={styles.infoBlock}>
          <div className={styles.infoTitleRow}>
            <span className={styles.infoIconWrap}>
              <img src={contact.icon} alt={contact.title} className={styles.infoIcon} />
            </span>
            <h3>{contact.title}</h3>
          </div>
          {contact.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ))}
    </Card>
  )
}
