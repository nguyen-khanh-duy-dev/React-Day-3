import styles from "./Header.module.scss"

function Header() {
    return (
        <div className={styles.container}>
            <img src="logo.png" className={styles.logo} />
            <h2 className={styles.heading}>Header dùng chung</h2>
            <img src="user-placeholder.png" className={styles.user} />
        </div>
    )
}

export default Header
