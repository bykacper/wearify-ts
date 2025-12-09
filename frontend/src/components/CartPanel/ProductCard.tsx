import { useCartStore } from '@/store/cartStore';
import styles from './CartPanel.module.css';
import type { CartItem } from '@/types/CartItem';

type ProductCardProps = {
    product: CartItem
}

const ProductCard = ({ product }: ProductCardProps) => {
    const increaseQty = useCartStore(store => store.increaseQty);
    const decreaseQty = useCartStore(store => store.decreaseQty);
    const totalPrice = (product.price * product.qty).toFixed(2);

    return (
        <article className={styles.productCard}>
            <img className={styles.productImage} src={product.image} alt={product.name} loading='lazy' decoding='async' />
            <div className={styles.productInfo}>
                <p className={styles.productName}> {product.name} </p>
                <p className={styles.productPrice}> {totalPrice} zł </p>
                <div className={styles.qtyControls}>
                    <button onClick={() => decreaseQty(product.id)}> - </button>
                    {product.qty}
                    <button onClick={() => increaseQty(product.id)}> + </button>
                </div>
            </div>
        </article>

    )
}

export default ProductCard;