import Collapse from "../components/Collapse"
import BannerAbout from "../components/BannerAbout"
import styles from "./About.module.css"

export default function Home() {
  const collapses = [
    {
      titre: "Fiabilité",
      contenu: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      titre: "Respect",
      contenu: "La bienveillance est au cœur de nos valeurs. Chaque utilisateur Kasa s'engage à respecter les règlements de son logement et à rester discret envers les voisins."
    },
    {
      titre: "Service",
      contenu: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez le moindre souci durant votre séjour."
    },
    {
      titre: "Sécurité",
      contenu: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant votre avis sur un logement où vous avez séjourné, vous participez à l'amélioration et la sécurisation de la communauté Kasa."
    }
  ]
  return (
    <>
      <BannerAbout />
      <div className={styles.collapsesContainer}>
        {collapses.map((collapse, index) => (
          <Collapse 
            key={index}
            titre={collapse.titre}
            contenu={collapse.contenu}
          />
        ))}
      </div>
    </>
  )
}