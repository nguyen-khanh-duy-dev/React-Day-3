import { useEffect, useState } from "react"
import { NavLink, useSearchParams } from "react-router"

import Pagination from "../../components/Pagination"
import Loading from "../../components/Loading"
import styles from "./Posts.module.scss"

function Posts() {
    const [param, setParam] = useSearchParams()
    const [page, setPage] = useState(() => param.get("page") ?? 1)
    const [posts, setPosts] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`
        )
            .then((res) => {
                setTotalPage(res.headers.get("X-Total-Count"))

                return res.json()
            })
            .then((posts) => {
                setPosts(posts)
                setError(null)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [page])

    useEffect(() => {
        setParam(page <= 1 ? "" : { page })
    }, [page, setParam])

    if (error) return <p className={styles.error}>Lỗi: {error}</p>

    return (
        <>
            {loading ? (
                <div className={styles.wrapperIcon}>
                    <Loading />
                </div>
            ) : (
                <div>
                    <ul className={styles.container}>
                        {posts.map((post) => (
                            <li key={post.id}>
                                <NavLink to={`/posts/${post.id}`}>
                                    {post.id}.{post.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Pagination
                        currentPage={Number(page)}
                        totalPage={Math.ceil(totalPage / 20)}
                        onPageChange={(newPage) => setPage(newPage)}
                    />
                </div>
            )}
        </>
    )
}

export default Posts
