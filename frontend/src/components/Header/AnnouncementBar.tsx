import styles from './Header.module.css';

export default function AnnouncementBar({message}: {message: string}) { 
    return <div className={styles.announcement}> {message} </div>
}
