import styles from './Header.module.css';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className={styles.headerBanner}>
            <img src={logo} alt='Logo de Kasa'/>
            <nav className={styles.headerNav}>
                <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? `${styles.headerLink} ${styles.active}` : styles.headerLink}
                >
                Accueil
                </NavLink>
                <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? `${styles.headerLink} ${styles.active}` : styles.headerLink}
                >
                A propos
                </NavLink>
            </nav>
        </header>
    )
}
