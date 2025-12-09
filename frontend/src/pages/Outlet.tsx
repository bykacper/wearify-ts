import PageTitle from "@/components/PageTitle/PageTitle";
import ProductsList from "@/components/ProductsList/ProductsList";
import { useEffect } from "react";

export default function Outlet() {
    useEffect(() => {
        document.title = "Outlet - Wearify";
    }, [])

    return (
        <>
            <PageTitle> Outlet </PageTitle>
            <ProductsList category="outlet" />
        </>
    )
}