import { NavLink } from "react-router"

import styles from "./AdminSidebar.module.scss"

const sidebarItems = [
    { to: "/dashboard", title: "Dashboard" },
    { to: "/users", title: "Users" },
    { to: "/setting", title: "Setting" },
    { to: "/", title: "Home" },
    { to: "/login", title: "Authentication" },
]

function AdminSidebar() {
    return (
        <div>
            <nav>
                <ul className={styles.container}>
                    {sidebarItems.map((item, index) => (
                        <li key={index} className={styles.item}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default AdminSidebar
