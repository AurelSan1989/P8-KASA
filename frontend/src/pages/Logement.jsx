import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Collapse from '../components/Collapse'
import styles from "./Logement.module.css"
import starActive from "../assets/star-active.png"
import starInactive from "../assets/star-inactive.png"
import Slideshow from '../components/Slideshow'

export default function Logement() {
    const { id } = useParams()
    const [property, setProperty] = useState(null)
    const [loading, setLoading] = useState(true)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? property.pictures.length - 1 : prev - 1))
    }
    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev === property.pictures.length -1 ? 0 : prev + 1))
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties`)
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => p.id === id)
                setProperty(found)
                setLoading(false)
            })
    }, [id])

    if (loading) return <p>Chargement...</p>
    if (!property) return <p>Propriété non trouvée</p>

    return (
        <section className={styles.LogementSection}>
            <Slideshow pictures={property.pictures} title={property.title}/>
            <div className={styles.LogementHeader}>
                <div className={styles.TitleLocation}>
                    <h1>{property.title}</h1>
                    <p>{property.location}</p>
                </div>
                <div className={styles.Host}>
                    <p>{property.host.name}</p>
                    <img src={property.host.picture} />
                </div> 
            </div>
            <div className={styles.TagsRating}>
                <div className={styles.Tags}>
                    {property.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
                <div className={styles.Rating}>
                    {Array.from({ length: 5}, (_, index) => (
                        <span key={index}>{
                            index + 1 <= parseInt(property.rating) ? 
                            (<img src={starActive} />) : 
                            (<img src={starInactive}/>)} 
                        </span>
                        ))}
                    </div>        
            </div>
            
            <div className={styles.CollapseContainer}>
                <Collapse 
                    titre="Description"
                    contenu={property.description}
                />
                <Collapse 
                    titre="Équipements"
                    contenu={
                        <ul>
                            {property.equipments.map((eq, index) => (
                                <li key={index}>{eq}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </section>
    )
}