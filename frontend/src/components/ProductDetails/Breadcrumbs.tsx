import styles from './ProductDetails.module.css';
import { Link } from 'react-router-dom';

export function Breadcrumbs({ productName }: { productName: string }) {
    return (
        <nav className={styles.breadcrumbs} aria-label='breadcrumb'>  
            <ol>
                <li> <Link to="/"> Strona główna </Link> </li>
                <li aria-current="page"> / {productName} </li>
            </ol>
        </nav>
    )
}