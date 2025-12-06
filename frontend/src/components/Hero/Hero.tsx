import type { HeroGalleryItem } from '../../types/HeroGalleryItem';
import styles from './Hero.module.css';
import heroImage1 from '@/assets/images/heroImage1.png';
import heroImage2 from '@/assets/images/heroImage2.png';
import heroImage3 from '@/assets/images/heroImage3.png';

const GALLERY: ReadonlyArray<HeroGalleryItem> = [
    {
        id: 0,
        src: heroImage1,
        alt: "Modelka w sportowej koszulce Wearify",
        class: "small"
    },
    {
        id: 1,
        src: heroImage2,
        alt: "Koszulka Wearify na wieszaku",
        class: "large"
    },
    {
        id: 2,
        src: heroImage3,
        alt: "Model prezentujący sportową koszulkę",
        class: "small"
    },
]

export default function Hero() { 
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}> WEARIFY </h1>
                <p className={styles.subtitle}> Nieograniczone możliwości </p>
            </div>
            <div className={styles.gallery}>
                {GALLERY.map(item => (
                    <img key={item.id} src={item.src} alt={item.alt} className={styles[item.class]}/>
                ))}
            </div>
        </section>
    )
}