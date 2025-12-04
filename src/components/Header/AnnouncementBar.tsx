import styles from './Header.module.css';

type AnnouncementBarProps = {
    message: string
}

export default function AnnouncementBar({message}: AnnouncementBarProps) { // optymalized
    return <div className={styles.announcement}> {message} </div>
}
