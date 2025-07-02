
import { useEffect, useRef, useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

export default function Layout() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [navHeight, setNavHeight] = useState(0);
    const navRef = useRef(null);

    useEffect(() => {
        const nav = document.querySelector('nav');
        if (nav) {
            setNavHeight(nav.offsetHeight);
        }
    }, [location.pathname]); // recalculate on route change

    return (
        <main
            style={{
                paddingTop: isHome ? 0 : `${navHeight}px`,
            }}
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    );
}
