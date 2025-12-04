import { Link } from "react-router-dom"
import styles from './Header.module.css';
import type { NavItem } from "../../types/NavItem";

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

export default function Navbar() { // optymalized
    return (
        <nav>
            <Link to='/' className={styles.logo}> WEARIFY </Link>
            <ul className={styles.navList}>
                {NAV_ITEMS.map(item => (
                    <li key={item.id} className={styles.navItem}> <Link to={item.href}> {item.content} </Link> </li>
                )
                )}
            </ul>
        </nav>
    )
}
