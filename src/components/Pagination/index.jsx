import PropTypes from "prop-types"
import clsx from "clsx"
import { GrFormPrevious } from "react-icons/gr"
import { GrFormNext } from "react-icons/gr"

import styles from "./Pagination.module.scss"

function Pagination({ currentPage, totalPage, onPageChange }) {
    const className = clsx(styles.container)

    const isFirstList = currentPage === 1 ? true : false
    const isLastList = currentPage === totalPage ? true : false

    const handleNext = (page) => {
        if (page < totalPage) {
            onPageChange(page + 1)
        }
    }

    const handlePrevious = (page) => {
        if (page > 1) {
            onPageChange(page - 1)
        }
    }

    const handleGoFirst = () => {
        onPageChange(1)
    }

    const handleGoLast = () => {
        onPageChange(totalPage)
    }

    return (
        <>
            <ul className={className}>
                <li
                    className={isFirstList ? styles.disable : ""}
                    onClick={() => handlePrevious(currentPage)}
                >
                    <GrFormPrevious />
                </li>
                <li
                    className={isFirstList ? styles.disable : ""}
                    onClick={() => handleGoFirst()}
                >
                    First
                </li>
                {Array.from({ length: totalPage }, (_, index) => {
                    const page = index + 1
                    return (
                        <li
                            key={page}
                            className={
                                page === currentPage ? styles.active : ""
                            }
                            onClick={() => {
                                page !== currentPage ? onPageChange(page) : ""
                            }}
                        >
                            {page}
                        </li>
                    )
                })}
                <li
                    className={isLastList ? styles.disable : ""}
                    onClick={() => handleGoLast()}
                >
                    Last
                </li>
                <li
                    className={isLastList ? styles.disable : ""}
                    onClick={() => handleNext(currentPage)}
                >
                    <GrFormNext />
                </li>
            </ul>
        </>
    )
}

Pagination.prototype = {
    currentPage: PropTypes.number,
    totalPage: PropTypes.number,
    onPageChange: PropTypes.func,
}

export default Pagination
