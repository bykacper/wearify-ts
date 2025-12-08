import type { Product } from "@/types/Product";
import styles from './ProductDetails.module.css';
import { Breadcrumbs } from "./Breadcrumbs";
import Gallery from "./Gallery";
import ProductInfo from "./ProductInfo";

type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    return (
        <article className={styles.productDetails}>
            <Breadcrumbs productName={product.name} />
            <div className={styles.productDetailsWrapper}>
                <Gallery src={product.image} alt={product.name} />
                <ProductInfo product={product} />
            </div>
        </article>
    )
}