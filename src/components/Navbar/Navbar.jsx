import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Logo from './blog-logo.png'

function Navbar(){

    return (
        <header className={styles.header}>
        <Link to="/"><img src={Logo} alt="Logo" className={styles.navLogo}></img></Link>
        <div className={styles.container}>
            <ul className={styles.navContainer}>
                <li className={styles.navItem}><Link to="#" className={styles.navLink}>About</Link></li>
                <li className={styles.navItem}><Link to="#" className={styles.navLink}>Contact</Link></li>
            </ul>
            <div className={styles.hidden}><i className="fa fa-bars fa-2x humburger"></i></div>
        </div>
        </header>
    )      
}

export default Navbar;