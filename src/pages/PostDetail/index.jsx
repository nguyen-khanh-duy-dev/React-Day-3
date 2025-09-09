import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import Loading from "../../components/Loading"
import styles from "./PostDetail.module.scss"

function PostDetail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [detailPost, setDetailPost] = useState({})
    const [comments, setComments] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const resPostDetail = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                )
                const resComments = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
                )

                if (!resPostDetail.ok) {
                    navigate("/posts")
                }

                const postDetailData = await resPostDetail.json()
                const commentsData = await resComments.json()

                setDetailPost(postDetailData)
                setComments(commentsData)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [id, navigate])

    if (loading)
        return (
            <div className={styles.wrapperIcon}>
                <Loading />
            </div>
        )

    return (
        <>
            <div className={styles.detail}>
                <article className={styles.post}>
                    <h1 className={styles.title}>{detailPost.title}</h1>
                    <div className={styles.user}>
                        User ID: {detailPost.userId}
                    </div>
                    <p className={styles.body}>{detailPost.body}</p>
                </article>

                <section className={styles.comments}>
                    <h2 className={styles.commentsTitle}>
                        Bình luận ({comments.length})
                    </h2>
                    {comments.map((c) => (
                        <div key={c.id} className={styles.comment}>
                            <div className={styles.avatar}>{c.name[0]}</div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.name}>
                                        {c.name}
                                    </span>
                                    <span className={styles.email}>
                                        &lt;{c.email}&gt;
                                    </span>
                                </div>
                                <p className={styles.text}>{c.body}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    )
}

export default PostDetail
