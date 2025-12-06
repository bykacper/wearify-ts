import type { MouseEventHandler } from 'react';
import styles from './Overlay.module.css';

const Overlay = ({ onCloseOverlay }: { onCloseOverlay: MouseEventHandler }) => {
    return (
        <div className={styles.overlay}
            onClick={onCloseOverlay}
            aria-hidden='true'>
        </div>
    )
}

export default Overlay;