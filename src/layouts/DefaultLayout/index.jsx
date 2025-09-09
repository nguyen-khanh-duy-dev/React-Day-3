import { Outlet } from "react-router"

import Navigation from "./Navigation"
import Header from "../components/Header"
import Footer from "./components/Footer"

function DefaultLayout() {
    return (
        <div>
            <Header />
            <Navigation />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout
