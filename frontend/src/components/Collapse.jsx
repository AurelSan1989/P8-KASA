import { useState } from "react";
import styles from './Collapse.module.css'
import Arrow from "../assets/Arrow.png"

export default function Collapse({ titre, contenu}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.Collapse}>
            <div className={styles.header} onClick={toggleCollapse}>
                <h3>{titre}</h3>
                <img 
                    src={Arrow} 
                    alt="flèche"
                    className={`${styles.arrow} ${isOpen ? styles.arrowOpen : styles.arrowClose}`}
                />
            </div>
            <div className={`${styles.content} ${isOpen ? styles.contentOpen : styles.contentClose}`}>
                {contenu}
            </div>
        </div>
    )
}