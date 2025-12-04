import type { HeroGalleryItem } from '../../types/HeroGalleryItem';
import styles from './Hero.module.css';
import heroImage1 from '@/assets/heroImage1.png';
import heroImage2 from '@/assets/heroImage2.png';
import heroImage3 from '@/assets/heroImage3.png';

const GALLERY: ReadonlyArray<HeroGalleryItem> = [
    {
        id: 0,
        src: heroImage1,
        alt: "Modelka w sportowej koszulce Wearify",
    },
    {
        id: 1,
        src: heroImage2,
        alt: "Koszulka Wearify na wieszaku",
    },
    {
        id: 2,
        src: heroImage3,
        alt: "Model prezentujący sportową koszulkę",
    },
]

export default function Hero() { // optymalized
    return (
        <section className={styles.hero}>
            <div>
                <h1 className={styles.title}> WEARIFY </h1>
                <p className={styles.subtitle}> Nieograniczone możliwości </p>
            </div>
            { GALLERY.map(item => (
                <img key={item.id} src={item.src} alt={item.alt} />
            ))}
        </section>
    )
}