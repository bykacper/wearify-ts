import { useRef, type MouseEventHandler } from 'react';
import styles from './Newsletter.module.css';
import modalImage from '@/assets/images/modalImage.png';

export default function Modal({ onCloseModal }: { onCloseModal: MouseEventHandler }) {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    return (
        <section className={styles.modal} role="dialog" aria-modal="true">
            <div className={styles.closeModalWrapper}>
                <button
                    className={styles.closeModalButton}
                    onClick={onCloseModal}
                    aria-label="Zamknij okno"
                >
                    X
                </button>
            </div>

            <div className={styles.modalContent}>
                <img src={modalImage} alt="" />
                <div className={styles.modalForm}>
                    <p>
                        <strong>-10% na pierwsze zamówienie.</strong><br />
                        Zapisz się do newslettera
                    </p>

                    <form>
                        <label htmlFor="name">Imię *</label>
                        <input type="text" id="name" name="name" ref={nameRef} required />

                        <label htmlFor="surname">Nazwisko</label>
                        <input type="text" id="surname" name="surname" />

                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" ref={emailRef} required />

                        <button type="submit" className={styles.submitButton}>
                            Prześlij
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}