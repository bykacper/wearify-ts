import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useCartStore } from "@/store/cartStore"
import Overlay from "../Overlay/Overlay";
import styles from './CartPanel.module.css';
import ProductCard from "./ProductCard";
import Summary from "./Summary";

export default function CartPanel() {
    const { isOpen, closeCart, productsInCart } = useCartStore(state => ({
        isOpen: state.isOpen,
        closeCart: state.closeCart,
        productsInCart: state.items
    }));

    useLockBodyScroll(isOpen);

    return (
        <>
            {isOpen && <Overlay onCloseOverlay={closeCart} />}

            <aside className={`${styles.cartPanel} ${isOpen ? styles.cartPanelOpen : ""}`} aria-label="Panel koszyka">
                <h2 className={styles.title}> Koszyk ({productsInCart.length} artykułów) </h2>
                <div className={styles.products}>
                    {productsInCart.length > 0 ? (
                        productsInCart.map(product => {
                            return <ProductCard key={product.id} product={product} />
                        })
                    ) : <p className={styles.cartIsEmpty}> Twój koszyk jest pusty. </p>}
                </div>
                {productsInCart.length > 0 ? <Summary /> : null}
            </aside>
        </>
    )
}