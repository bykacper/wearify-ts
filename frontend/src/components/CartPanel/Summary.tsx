import { useCartStore } from "@/store/cartStore";
import styles from "./CartPanel.module.css";
import tagImage from "@/assets/images/tag.png";
import { useState, useRef } from "react";
import { formatPrice } from "@/utils/formatPrice";

export default function Summary() {
  const totalCost = useCartStore(state =>
    state.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  );

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

  const finalCost = totalCost * discountMultiplier;

  const inputClass =
    isCodeValid === true
      ? styles.valid
      : isCodeValid === false
      ? styles.invalid
      : "";

  return (
    <footer className={styles.summary} aria-label="Podsumowanie koszyka">
      <button
        className={styles.promoCode}
        onClick={() => setIsOpen(v => !v)}
      >
        <img src={tagImage} alt="" aria-hidden="true" />
        Wprowadź kod promocyjny
      </button>

      {isOpen && (
        <div className={styles.promoCodeDropDown}>
          <input
            ref={promoRef}
            type="text"
            placeholder="np. RABAT25"
            aria-label="Kod promocyjny"
            className={inputClass}
          />
          <button onClick={applyDiscount}>Zastosuj</button>
        </div>
      )}

      <div className={styles.totalCost}>
        <span>Szacowana suma</span>
        <span>{formatPrice(finalCost)}</span>
      </div>

      <button type="button" className={styles.payment}>
        Kasa
      </button>
    </footer>
  );
}
