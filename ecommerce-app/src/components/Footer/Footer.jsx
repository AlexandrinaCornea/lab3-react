import footerData from "@data/footer.json";
import { Button } from "@components/ui/Button";
import styles from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div>
                    <h4 className={styles.title}>Exclusive</h4>
                    <p className={styles.text}>Get 10% off your first order</p>
                    <div className={styles.subscribe}>
                        <input placeholder="Enter your email" />
                        <Button size="sm">Send</Button>
                    </div>
                </div>

                {footerData.columns.map((column) => (
                    <div key={column.title}>
                        <h4 className={styles.title}>{column.title}</h4>
                        {column.items.map((item) => (
                            <p key={item} className={styles.text}>{item}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles.copy}>{footerData.copyright}</div>
        </footer>
    );
}
