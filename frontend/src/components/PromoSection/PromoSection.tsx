import lightningImg from '@/assets/images/lightning.png';
import saleImage from '@/assets/images/sale_image.png';
import styles from './PromoSection.module.css';

export default function PromoSection() {
  return (
    <section
      className={styles.promoSection}
      aria-label="Promocja - wyprzedaż"
    >
      <div className={styles.promoText}>
        <img src={lightningImg} alt="" className={styles.lightning} />

        <h2 className={styles.title}>WYPRZEDAŻ!</h2>
        <h3 className={styles.discount}>-25%</h3>

        <p className={styles.description}>
          25% zniżki na wszystko z kodem <strong>TEES25</strong>
        </p>
      </div>

      <figure className={styles.imageWrapper}>
        <img
          src={saleImage}
          alt="Modelka prezentująca ubrania Wearify"
          decoding="async"
          loading="lazy"
          className={styles.image}    
        />
      </figure>
    </section>
  );
}