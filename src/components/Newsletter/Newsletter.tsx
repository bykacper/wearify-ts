import styles from './Newsletter.module.css';

export default function Newsletter() {
    return (
        <section className={styles.newsletter}>
            <button aria-label="Otwórz formularz newslettera"> 
                <span className={styles.arrow}> → </span>
                <span className={styles.content}>-10% NA PIERWSZE ZAMÓWIENIE!</span>
                <span className={styles.arrow}> ← </span>
            </button>
        </section>
    )
}