import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import styles from './Header.module.css';

export default function Header() { 
    const announcementMsg = "Wyprzedaż! 25% zniżki na wszystko z kodem TEES25";

    return (
        <header className={styles.header}   >
            <AnnouncementBar message={announcementMsg} />
            <Navbar />
        </header>
    )
}
