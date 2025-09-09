import { Outlet } from "react-router"

import styles from "./AdminLayout.module.scss"
import AdminSidebar from "./components/AdminSidebar"
import AdminFooter from "./components/AdminFooter"
import AdminHeader from "./components/AdminHeader"

function AdminLayout() {
    return (
        <div className={styles.container}>
            <AdminHeader />
            <div className={styles.content}>
                <AdminSidebar />
                <Outlet />
            </div>
            <AdminFooter />
        </div>
    )
}

export default AdminLayout
