import { Link } from "react-router-dom";
import styles from './ProductsList.module.css';
import type { Product } from "@/types/Product";

export default function ProductCard({product}: {product: Product}) {
    return (
        <Link 
            to={`${product.id}`}
            className={styles.productCard}
            aria-label={`Zobacz szczegóły produktu ${product.name}`}>
                <figure className={styles.figure}>
                    <div className={styles.imageWrapper}>
                        <img src={product.image} 
                             alt={product.name}
                             className={styles.image} 
                             loading="lazy"
                             decoding="async"/>

                             {product.bestseller && (
                                <span className={styles.badge}> Bestseller </span>
                             )}
                    </div>

                    <figcaption className={styles.productInfo}>
                        <span> {product.name} </span>
                        <span> {product.price} zł </span>
                    </figcaption>
                </figure>
        </Link>
    )
}