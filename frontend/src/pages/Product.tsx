import rawProducts from '@/assets/data/rawProducts.json';
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { Navigate, useParams } from "react-router-dom";
import type { Product } from "@/types/Product";

export default function Product() {
    const { productId } = useParams();

    const product: Product | undefined = rawProducts.find(
        p => p.id === Number(productId)
    );

    if (!product) {
        return <Navigate to="/404" replace />;
    }

    return <ProductDetails product={product} />;
}
