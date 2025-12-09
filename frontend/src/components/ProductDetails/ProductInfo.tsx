import type { Product } from '@/types/Product';
import styles from './ProductDetails.module.css';
import Accordion from './Accordion';
import { useCartStore } from '@/store/cartStore';

const GENDER_LABELS: Record<Product["gender"], string> = {
    men: "Kolekcja męska",
    women: "Kolekcja damska",
    unisex: "Kolekcja unisex"
};

export default function ProductInfo({ product }: { product: Product }) {
    const genderLabel = GENDER_LABELS[product.gender];
    const addItemToCart = useCartStore(state => state.addItem);
    
    return (
        <div className={styles.productInfo}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.gender}>{genderLabel}</p>
            <p className={styles.price}>{product.price} zł</p>
            <button onClick={() => addItemToCart(product)} className={styles.button}>Dodaj do koszyka</button>
            <Accordion title="INFO PRODUKTU">
                <p>Lorem ipsum...</p>
            </Accordion>

            <Accordion title="POLITYKA ZWROTÓW">
                <p>Zwroty w ciągu 30 dni...</p>
            </Accordion>

            <Accordion title="INFO O WYSYŁCE">
                <p>Dostawa 24h...</p>
            </Accordion>
        </div>
    )
}