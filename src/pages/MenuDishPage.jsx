import React from 'react'
import {useParams} from 'react-router-dom'
import BackToMenu from '../components/BackToMenu';

export default function MenuDishPage() {

    const data = {
        "tempura-sushi": {
            heading: "Tempura Sushi",
            text: "Our awesome fried sushi"
        },
        "poke-bowl": {
            heading: "Poke Bowl",
            text: "Hawai Asian Fusion"
        },
        "egg-rolls": {
            heading: "Egg Rolls",
            text: "Our awesome Egg Rolls"
        }
    }

    let params = useParams();
    return (
        <div>
            <BackToMenu />
            <h2>
                {data[params.dish].heading}
            </h2>
            <p>
                {data[params.dish].text}
            </p>
            <p>
                {params.dish}
            </p>
        </div>
    )
}
