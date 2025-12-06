import { useState } from 'react';
import styles from './Newsletter.module.css';
import Modal from './Modal';
import Overlay from '../Overlay/Overlay';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

export default function Newsletter() {
    const [modalVisibility, setModalVisibility] = useState(false);

    const changeModalVisibility = () => {
        setModalVisibility(mV => !mV);
    }

    useLockBodyScroll(modalVisibility);

    return (
        <section className={styles.newsletter}>
            <button onClick={changeModalVisibility} className={styles.changeModalVisibilityButton} aria-label="Otwórz formularz newslettera"> 
                <span className={styles.arrow}> → </span>
                <span className={styles.content}>-10% NA PIERWSZE ZAMÓWIENIE!</span>
                <span className={styles.arrow}> ← </span>
            </button>
            {modalVisibility && <Modal onCloseModal={changeModalVisibility}/>}
            {modalVisibility && <Overlay onCloseOverlay={changeModalVisibility}/>}
        </section>
    )
}