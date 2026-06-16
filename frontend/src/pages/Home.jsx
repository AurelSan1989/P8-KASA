import { useState, useEffect } from "react"
import Banner from "../components/Banner"
import Card from "../components/Card"
import styles from "../components/Card.module.css"
import BannerHome from "../assets/BannerHome.jpg"

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
      <Banner 
        image={BannerHome} 
        titre={(<h1>Chez vous, <br className={styles.mobileBreak}/>partout et ailleurs</h1>)}/>
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