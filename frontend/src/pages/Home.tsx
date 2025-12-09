import PromoSection from "@/components/PromoSection/PromoSection";
import Hero from "../components/Hero/Hero";
import ProductsList from "../components/ProductsList/ProductsList";
import Newsletter from "@/components/Newsletter/Newsletter";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Strona główna - Wearify";
    }, [])

    return (
        <>
            <Hero />
            <SectionTitle> Outlet </SectionTitle>
            <ProductsList category="outlet" />
            <PromoSection />
            <Newsletter />
        </>
    )
}

export default Home;