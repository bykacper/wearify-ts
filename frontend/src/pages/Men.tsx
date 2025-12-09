import PageTitle from "@/components/PageTitle/PageTitle";
import ProductsList from "@/components/ProductsList/ProductsList";
import { useEffect } from "react";

export default function Men() {
    useEffect(() => {
        document.title = "Kolekcja męska - Wearify";
    }, [])

    return (
        <>
            <PageTitle> Kolekcja męska </PageTitle>
            <ProductsList category="men" />
        </>
    )
}