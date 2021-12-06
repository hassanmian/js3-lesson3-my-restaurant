import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuPage() {
    return (
        <div>
            <h2>Our menu</h2>
            <p>Our menu consists of the following dishes</p>
            <ul>
                <li>
                    <Link to="/menu/tempura-sushi">Tempura Sushi</Link>
                </li>
                <li>
                    <Link to="/menu/poke-bowl">Poke Bowl</Link>
                </li>
                <li>
                    <Link to="/menu/egg-rolls">Egg Rolls</Link>
                </li>
            </ul>
        </div>
    )
}
