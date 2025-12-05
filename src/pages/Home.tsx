import Hero from "../components/Hero/Hero";
import ProductsList from "../components/ProductsList/ProductsList";

const Home = () => {
    return (
        <>
            <Hero />
            <ProductsList category="outlet" />
        </>
    )
}

export default Home;