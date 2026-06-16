import styles from './Banner.module.css'

export default function Banner({image, titre}) {
    return (
        <div className={styles.Banner}>
            <img src={image} alt="Bannière"/>
            {titre && <h1>{titre}</h1>}
        </div>
    )
}