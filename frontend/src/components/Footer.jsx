import FooterLogo from "../assets/footer-logo.png"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={FooterLogo} alt='Logo de Kasa' className={styles.footerLogo}/>
            <p className={styles.footerText}>
                © 2020 Kasa. All <span>rights reserved</span>
            </p>            
        </footer>
    )
}