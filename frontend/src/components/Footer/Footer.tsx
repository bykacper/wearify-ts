import type { FooterNavItem } from '@/types/FooterNavItem';
import styles from './Footer.module.css';
import facebookImage from '@/assets/images/facebook-icon.png';
import instagramImage from '@/assets/images/instagram-icon.png';
import youtubeImage from '@/assets/images/youtube-icon.png';
import type { SocialItem } from '@/types/SocialItem';

const FOOTER_ITEMS: FooterNavItem[] = [
    {
        id: 0,
        title: "Sklep",
        items: ["Nowości", "Kobiety", "Mężczyźni"]
    },
    {
        id: 1,
        title: "Nasz sklep",
        items: ["O nas", "Subskrybuj", "FAQ"]
    },
    {
        id: 2,
        title: "Zasady i warunki",
        items: ["Nasze zasady", "Wysyłka i płatności", "Metody płatności", "Cookies"]
    }
]

const SOCIAL_ITEMS: SocialItem[] = [
    {
        id: 0,
        imageSrc: facebookImage,
        alt: "Facebook Icon"
    },
    {
        id: 1,
        imageSrc: instagramImage,
        alt: "Instagram Icon"
    },
    {
        id: 2,
        imageSrc: youtubeImage,
        alt: "Youtube Icon"
    }
]

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <address className={styles.contact}>
                <h3> WEARIFY </h3>
                <p> kacperus12345pl </p>
                <p> Tel.: 123-456-789 </p>
            </address>

            <nav className={styles.links}>
                {FOOTER_ITEMS.map((item) => (
                    <div key={item.id}>
                        <h4> {item.title} </h4>
                        <ul>
                            {item.items.map((navElement, index) => (
                                <li key={index}> {navElement} </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            <ul className={styles.social}>
                {SOCIAL_ITEMS.map((item) => (
                    <li key={item.id}>
                        <img src={item.imageSrc} alt={item.alt} decoding="async" loading="lazy" />
                    </li>
                ))}
            </ul>

            <section className={styles.copy}>
                <p> &copy; {new Date().getFullYear()} WEARIFY.</p>
            </section>
        </footer>
    )
}