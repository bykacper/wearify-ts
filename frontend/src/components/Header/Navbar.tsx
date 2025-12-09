import { Link } from "react-router-dom"
import styles from './Header.module.css';
import type { NavItem } from "../../types/NavItem";
import CartButton from "./CartButton";
import { useEffect, useState } from "react";
import hamburgerImage from '@/assets/images/hamburgerMenu.png';
import HamburgerMenu from "./HamburgerMenu";

const NAV_ITEMS: ReadonlyArray<NavItem> = [
    {
        id: 0,
        href: '/outlet',
        content: 'Outlet'
    },
    {
        id: 1,
        href: '/women',
        content: 'Dla kobiet'
    },
    {
        id: 2,
        href: '/men',
        content: 'Dla mężczyzn'
    }
]

const MOBILE_BREAKPOINT = 1100;

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth <= MOBILE_BREAKPOINT : false
    );

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toogleMobileMenuVisible = () => {
        setMobileMenuVisible(pV => !pV);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        };

        handleResize(); 

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>WEARIFY</Link>

            {!isMobile && (
                <>
                    <ul className={styles.navList}>
                        {NAV_ITEMS.map(({id, href, content}) => (
                            <li key={id} className={styles.navItem}>
                                <Link to={href}>{content}</Link>
                            </li>
                        ))}
                    </ul>

                    <CartButton />
                </>
            )}

            {isMobile && (
                <button className={styles.hamburgerButton} aria-label="Otwórz menu">
                    <img onClick={toogleMobileMenuVisible} src={hamburgerImage} alt="" className={styles.hamburgerImage} />
                </button>
            )}

            {isMobile && mobileMenuVisible && <HamburgerMenu onClose={toogleMobileMenuVisible}/>}
        </nav>
    );
}
