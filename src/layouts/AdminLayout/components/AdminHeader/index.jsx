import styles from "./AdminHeader.module.scss"

function Header() {
    return (
        <div className={styles.container}>
            <img src="/logo.png" className={styles.logo} />
            <h2 className={styles.heading}>Header của Admin</h2>
            <img src="/user-placeholder.png" className={styles.user} />
        </div>
    )
}

export default Header
