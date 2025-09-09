import { NavLink } from "react-router"

import styles from "./AuthSidebar.module.scss"

const sidebarItems = [
    { to: "/login", title: "Login" },
    { to: "/register", title: "Register" },
    { to: "/forgotPassword", title: "Forgot password" },
    { to: "/", title: "Home" },
    { to: "/dashboard", title: "Dash Board" },
]

function AuthSidebar() {
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

export default AuthSidebar
