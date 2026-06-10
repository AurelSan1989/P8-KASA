import styles from './BannerAbout.module.css'
import bannerAbout from '../assets/BannerAbout.jpg'

export default function BannerAbout() {
    return (
        <div className={styles.Banner}>
            <img src={bannerAbout} alt="Bannière page à propos" />
        </div>
    )
}