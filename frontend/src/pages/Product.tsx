import { useParams } from "react-router-dom"
import rawProducts from '@/assets/data/rawProducts.json';
import ProductDetails from "@/components/ProductDetails/ProductDetails";

export default function Product() {
    const { productId } = useParams();
    const product = rawProducts.find(p => p.id === Number(productId));

    return (
        <ProductDetails product={product}/>
    )
}