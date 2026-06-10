import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Logement() {
    const { id } = useParams()
    const [property, setProperty] = useState(null)
    const [loading, setLoading] = useState(true)

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
        <div>
            <h1>{property.title}</h1>
            <img src={property.cover} alt={property.title} />
            {/* On ajoutera plus de détails après */}
        </div>
    )
}