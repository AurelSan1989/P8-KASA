import { useState } from "react";
import styles from './Collapse.module.css'
import arrowClose from "../assets/ArrowClose.png"
import arrowOpen from "../assets/ArrowOpen.png"

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
                    src={isOpen ? arrowOpen : arrowClose} 
                    alt="flèche"
                    className={styles.arrow}
                />
            </div>
            {isOpen && (
                <div className={styles.content}>
                    {contenu}
                </div>
            )}
        </div>
    )
}