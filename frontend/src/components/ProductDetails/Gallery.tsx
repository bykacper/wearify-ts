import styles from './ProductDetails.module.css';

type GalleryProps = {
    src: string,
    alt: string,
}

export default function Gallery({ src, alt }: GalleryProps) {
    return (
        <img src={src}
             alt={alt}
             className={styles.productImage}
             loading='lazy'
             decoding='async' />
    )
}