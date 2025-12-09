import { useCartStore } from '../../store/cartStore';
import styles from './CartPanel.module.css';
import tagImage from '@/assets/images/tag.png';
import { useState, useRef } from 'react';

const Summary = () => {
    const totalCost = useCartStore(state => state.totalCost());
    
    const [isOpen, setIsOpen] = useState(false);
    const [discountMultiplier, setDiscountMultiplier] = useState(1);
    const [isCodeValid, setIsCodeValid] = useState<boolean | null>(null);

    const promoRef = useRef<HTMLInputElement>(null);

    const applyDiscount = () => {
        if (!promoRef.current) return;

        const code = promoRef.current.value.trim().toUpperCase();

        if (code === "RABAT25") {
            setDiscountMultiplier(0.75);
            setIsCodeValid(true);
        } else {
            setDiscountMultiplier(1);
            setIsCodeValid(false);
        }
    };

    const finalCost = (totalCost * discountMultiplier).toFixed(2);

    return (
        <footer className={styles.summary} aria-label="Podsumowanie koszyka">
            <button
                className={styles.promoCode}
                onClick={() => setIsOpen(v => !v)}
            >
                <img src={tagImage} alt="" />
                Wprowadź kod promocyjny
            </button>

            {isOpen && (
                <div className={styles.promoCodeDropDown}>
                    <input
                        ref={promoRef}
                        type="text"
                        placeholder="np. RABAT25"
                        className={
                            isCodeValid === null 
                                ? "" 
                                : isCodeValid 
                                    ? styles.valid 
                                    : styles.invalid
                        }
                    />
                    <button onClick={applyDiscount}>Zastosuj</button>
                </div>
            )}

            <div className={styles.totalCost}>
                <span>Szacowana suma</span>
                <span>{finalCost} zł</span>
            </div>

            <button type="button" className={styles.payment}>
                Kasa
            </button>
        </footer>
    );
};

export default Summary;
