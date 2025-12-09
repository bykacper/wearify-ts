import { Outlet } from "react-router-dom"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CartPanel from "@/components/CartPanel/CartPanel";

const RootLayout = () => { 
    return (
        <div>
            <Header />
            <CartPanel />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout;