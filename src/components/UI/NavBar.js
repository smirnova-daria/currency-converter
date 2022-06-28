import React from 'react'
import s from './NavBar.module.scss'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className="container">
                <Link to="/" className={s.nav__link}>
                    Converter
                </Link>
                <Link to="/rates" className={s.nav__link}>
                    Rates
                </Link>
            </div>
        </nav>
    )
}
