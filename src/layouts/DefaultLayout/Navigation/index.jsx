import { NavLink } from "react-router"

import styles from "./Navigation.module.scss"

const navItems = [
    { to: "/", title: "Home" },
    { to: "/about", title: "About" },
    { to: "/posts", title: "Post" },
    { to: "/dashboard", title: "DashBoard" },
    { to: "/login", title: "Authentication" },
]

function Navigation() {
    return (
        <nav>
            <ul className={styles.container}>
                {navItems.map((item, index) => (
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
    )
}

export default Navigation
