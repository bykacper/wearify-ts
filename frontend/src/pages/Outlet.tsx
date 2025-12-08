import PageTitle from "@/components/PageTitle/PageTitle";
import ProductsList from "@/components/ProductsList/ProductsList";

export default function Outlet() {
    return (
        <>
            <PageTitle> Outlet </PageTitle>
            <ProductsList category="outlet" />
        </>
    )
}