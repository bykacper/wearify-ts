import shoppingCartIcon from '@/assets/images/shoppingCartIcon.png';
import styles from './Header.module.css';

export default function CartButton() {
    return (
        <button className={styles.cartButton} aria-label='Otwórz koszyk'>
            Koszyk
            <img src={shoppingCartIcon} alt="Koszyk z zakupami" />
        </button>
    )
}