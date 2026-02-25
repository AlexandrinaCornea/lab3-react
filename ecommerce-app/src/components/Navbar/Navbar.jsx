import { Button } from "@components/ui/Button";
import styles from "./Navbar.module.css";

export function Navbar({ navigate, currentPage }) {
    return (
        <header className={styles.header}>
            <div className={styles.topbar}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</div>
            <div className={styles.navWrap}>
                <div className={styles.brand}>Exclusive</div>
                <nav className={styles.nav}>
                    <button
                        className={`${styles.navLink} ${currentPage === "home" ? styles.active : ""}`.trim()}
                        onClick={() => navigate("home")}
                    >
                        Home
                    </button>
                    <button
                        className={`${styles.navLink} ${currentPage === "about" ? styles.active : ""}`.trim()}
                        onClick={() => navigate("about")}
                    >
                        About
                    </button>
                    <button
                        className={`${styles.navLink} ${currentPage === "contact" ? styles.active : ""}`.trim()}
                        onClick={() => navigate("contact")}
                    >
                        Contact
                    </button>
                </nav>

                <div className={styles.actions}>
                    <input className={styles.search} placeholder="What are you looking for?" />
                    <Button variant="ghost" size="sm">Cart</Button>
                </div>
            </div>
        </header>
    );
}
