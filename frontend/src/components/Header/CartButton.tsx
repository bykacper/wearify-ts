import shoppingCartIcon from '@/assets/images/shoppingCartIcon.png';
import styles from './Header.module.css';
import { useCartStore } from '@/store/cartStore';

export default function CartButton() {
    const toogleCart = useCartStore(state => state.toggleCart);

    return (
        <button onClick={toogleCart} className={styles.cartButton} aria-label='Otwórz koszyk'>
            Koszyk
            <img src={shoppingCartIcon} alt="Koszyk z zakupami" />
        </button>
    )
}