import styles from './BannerHome.module.css'
import Banner from '../assets/BannerHome.jpg'

export default function BannerHome() {
    return (
        <div className={styles.Banner}>
            <img src={Banner} alt="Bannière page d'accueil"/>
            <h1>Chez vous, <br className={styles.mobileBreak}/>partout et ailleurs</h1>
        </div>
    )
}