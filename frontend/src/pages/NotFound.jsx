import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"

export default function Home() {
  return (
    <section className={styles.notFoundContainer}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className={styles.link}>Retourner sur la page d'accueil</Link>
    </section>
  )
}