import type { NavItem } from '@/types/NavItem';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const NAV_ITEMS: ReadonlyArray<NavItem> = [
    { id: 0, href: '/outlet', content: 'Outlet' },
    { id: 1, href: '/women', content: 'Dla kobiet' },
    { id: 2, href: '/men', content: 'Dla mężczyzn' }
];

type HamburgerMenuProps = {
    onClose: () => void;
};

export default function HamburgerMenu({ onClose }: HamburgerMenuProps) {
    return (
        <nav className={styles.hamburgerMenu}>
            <ul className={styles.mobileNavList}>
                {NAV_ITEMS.map(item => (
                    <li key={item.id} className={styles.mobileNavItem}>
                        <Link 
                            to={item.href}
                            onClick={onClose}
                        >
                            {item.content}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
