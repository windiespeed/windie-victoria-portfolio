import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <h1 className="logo">Windie Victoria</h1>
            <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <ul className={menuOpen ? 'show' : ''}>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
}
