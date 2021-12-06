import React from 'react'
import {Link} from "react-router-dom"

export default function Navigation() {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Start</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/menu">Menu</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/menu/tempura-sushi">Tempura Sushi</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/menu/poke-bowl">Poke Bowl</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/menu/egg-rolls">Egg Rolls</Link>
                </li>
            </ul>
        </div>
    )
}
