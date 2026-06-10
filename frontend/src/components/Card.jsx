import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({ titre, image, id}) {
    return (
        <Link to={`/logement/${id}`} className={styles.cardLink}>
            <div className={styles.card}>
                <img src={image} alt={titre} />
                <h2>{titre}</h2>
            </div>
        </Link>
    )
}