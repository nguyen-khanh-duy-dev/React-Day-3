import styles from "./Footer.module.scss"
import Contact from "../../../../pages/Contact"
import Privacy from "../../../../pages/Privacy"
import { NavLink } from "react-router"

function Footer() {
    const navItems = [
        { to: "/contact", title: "Contact" },
        { to: "/privacy", title: "Privacy" },
    ]
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Đây là Footer Default layout</h2>
            <nav>
                <ul className={styles.right}>
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
        </div>
    )
}

export default Footer
