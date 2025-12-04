import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header";

const RootLayout = () => { // optymalized
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer> Footer </footer>
        </div>
    )
}

export default RootLayout;