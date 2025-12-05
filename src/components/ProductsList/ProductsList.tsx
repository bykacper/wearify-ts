import type { Category } from "@/types/Category";
import type { Product } from "@/types/Product";
import rawProducts from "@/assets/data/rawProducts.json";
import styles from "./ProductsList.module.css";
import ProductCard from "./ProductCard";

const products = rawProducts as Product[];

export default function ProductsList({ category }: { category: Category }) {

  const filteredProducts: Product[] = (() => {
    switch (category) {
      case "men":
        return products.filter((p) => p.gender === "men");
      case "women":
        return products.filter((p) => p.gender === "women");
      case "outlet":
        return products.filter((p) => p.outlet === true);
      default:
        return products;
    }
  })(); 

  if (filteredProducts.length === 0) {
    return <p>Brak produktów do wyświetlenia...</p>;
  }

  return (
    <section
      className={styles.productsList}
      aria-label={`Lista produktów: ${category || "wszystkie"}`}
    >
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
