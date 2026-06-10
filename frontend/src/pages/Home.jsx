import { useState, useEffect } from "react"
import BannerHome from "../components/BannerHome"
import Card from "../components/Card"
import styles from "../components/Card.module.css"

export default function Home() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
    .then(res => res.json())
    .then(data => {
      setProperties(data);
      setLoading(false)
    })
    .catch(error => {
      console.error('Erreur:', error)
      setLoading(false)
    })

  }, [])
  return (
    <>
      <BannerHome />
      {loading ? (
        <p>Chargement</p>
      ) : (
        <section className={styles.cards}>
          {properties.map(property => (
            <Card 
              key={property.id}
              id={property.id}
              titre={property.title}
              image={property.cover}
            />
          ))}
        </section>
      )}
    </>
  )
}