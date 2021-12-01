import { Link } from "react-router-dom";
import { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    function toggleOpen() {
        isOpen ? setOpen(false) : setOpen(true); 
    }

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-left"><a className="nav-link" href="https://deadunicorngames.itch.io/" target="blank">DEAD UNICORN</a></li>
                <li><Link className="nav-link" to="/">HOME</Link></li>
                <li><Link className="nav-link" to="/presskit">PRESS KIT</Link></li>
                <li><a className="nav-link" href="https://deadunicorngames.itch.io/return-pre-alpha/devlog" target="blank">DEMO</a></li>
                <li><a className="nav-link" href="https://deadunicorngames.itch.io/return-pre-alpha/devlog" target="blank">DEVELOPMENT BLOG</a></li>
            </ul>
            <div className="mobile-toggle-container">
                <Hamburger className="mobile-burger" toggled={isOpen} toggle={setOpen} size={36}/>
            </div>
            <ul className={`nav-list-mobile ${isOpen ? "open" : ""}`}>
                <li onClick={toggleOpen}><a className="nav-link" href="https://deadunicorngames.itch.io/" target="blank">DEAD UNICORN</a></li>
                <li onClick={toggleOpen}><Link className="nav-link" to="/">HOME</Link></li>
                <li onClick={toggleOpen}><Link className="nav-link" to="/presskit">PRESS KIT</Link></li>
                <li onClick={toggleOpen}><a className="nav-link" href="https://deadunicorngames.itch.io/return-pre-alpha/devlog" target="blank">DEMO</a></li>
                <li onClick={toggleOpen}><a className="nav-link" href="https://deadunicorngames.itch.io/return-pre-alpha/devlog" target="blank">DEVELOPMENT BLOG</a></li>
            </ul>            
        </nav>
    )
}

export default Nav
