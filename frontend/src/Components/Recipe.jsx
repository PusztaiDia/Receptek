import React from 'react'
import { BASE_URL } from '../App'

const Recipe = (props) => {

    const { id, ingridents, name, category, image, description } = props
    return (
        <div>
            <img src={BASE_URL + image} />
            <h2>{name}</h2>
            <ul>
                {
                    ingridients.map(hozzavalo => <li>
                        {hozzavalo}
                    </li> )
                }
            </ul>
            <h3>Hozzávalók:</h3>
            <ul>
                {ingridents.map(hozzavalo => <li>{hozzavalo}</li> )}
            </ul>
            <h3>Elkészítés</h3>
            <p>{description}</p>
        </div>
    )

}

export default Recipe