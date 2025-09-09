import { PiSpinner } from "react-icons/pi"
import clsx from "clsx"

import styles from "./Loading.module.scss"

function Loading({ className }) {
    const classNames = clsx(styles.icon, className)
    return (
        <>
            <PiSpinner className={classNames} />
        </>
    )
}

export default Loading
