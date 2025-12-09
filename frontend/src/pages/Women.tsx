import PageTitle from "@/components/PageTitle/PageTitle";
import ProductsList from "@/components/ProductsList/ProductsList";
import { useEffect } from "react";

export default function Women() {
    useEffect(() => {
        document.title = "Kolekcja damska - Wearify";
    }, [])

    return (
        <>
            <PageTitle> Kolekcja damska </PageTitle>
            <ProductsList category="women" />
        </>
    )
}