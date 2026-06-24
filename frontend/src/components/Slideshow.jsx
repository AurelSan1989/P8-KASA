import styles from './Slideshow.module.css'
import { useState } from 'react'
import next from "../assets/ArrowRight.png"
import previous from "../assets/ArrowLeft.png"


export default function Slideshow( {pictures, title} ) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1))
    }
    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev === pictures.length -1 ? 0 : prev + 1))
    }


    return (
        <div className={styles.LogementBanner}>
                        <img src={pictures[currentImageIndex]} alt={title} />
                        {pictures.length > 1 && 
                            <> 
                                <img 
                                    src={next} 
                                    onClick={goToNext} 
                                    className={`${styles.arrow} ${styles.arrowNext}`}
                                    alt='Image suivante'
                                /> 
                                <img 
                                    src={previous} 
                                    onClick={goToPrevious} 
                                    className={`${styles.arrow} ${styles.arrowPrevious}`}
                                    alt='Image précédente'
                                /> 
                            </>
                        } 
                        <span>{currentImageIndex + 1} / {pictures.length}</span>           
                    </div>
    )
}