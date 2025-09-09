import { Outlet } from "react-router"

import styles from "./AuthLayout.module.scss"
import AuthSidebar from "./components/AuthSidebar"
import Header from "../components/Header"

function AuthLayout() {
    return (
        <div>
            <Header />
            <div className={styles.content}>
                <AuthSidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout
