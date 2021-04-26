import Link from "next/link"

import PostIntro from "src/ui/PostIntro"
import styles from "src/views/Posts/styles.module.css"

const Posts = ({ posts, prevPosts, nextPosts }) => {
  const isLocal = process.env.NODE_ENV === "development"

  return (
    <>
      <div className={styles.container}>
      {posts &&
        posts
          .filter((post) => {
            return isLocal || !post.draft
          })
          .map((post) => (
            <PostIntro key={post.slug} post={post} />
          ))}
      </div>

      <div className={styles.navigation}>
        <div className={styles.left}>
          {prevPosts !== null && (
            <Link href={"/blog/" + prevPosts} passHref>
              <a>« see newer posts</a>
            </Link>
          )}
        </div>
        <div className={styles.right}>
          {nextPosts !== null && (
            <Link href={"/blog/" + nextPosts} passHref>
              <a>see older posts »</a>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Posts
