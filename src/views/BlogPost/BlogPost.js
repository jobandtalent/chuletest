import MDX from "@mdx-js/runtime"
import Image from "next/image"

import config from "blog.config"
import Code from "src/ui/Code"
import DraftBadge from "src/ui/DraftBadge"

import styles from "src/views/BlogPost/styles.module.css"

const BlogPost = ({ post }) => {
  const isLocal = process.env.NODE_ENV === "development"

  const components = {
    div: (props) => <div {...props} />,
    pre: (props) => <div {...props} />,
    code: Code,
  }

  return (
    <div className={styles.container}>
      {!isLocal && post.draft ? (
        <header className={styles.header}>
          <h1 className={styles.title}>
            This post has not yet been published. Please try again later.
          </h1>
        </header>
      ) : (
        <>
          <header className={styles.header}>
            <h1 className={styles.title}>
              {post.title}
            </h1>
            {config.showDate && (
              <span className={styles.date}>
                Originally published on{" "}
                {new Date(post.date).toLocaleDateString()}
              </span>
            )}
            {post.draft && <div className={styles.draft}><DraftBadge /></div>}
          </header>
          {post.coverImage && (
            <div className={styles.image}>
              <Image
                layout='fill'
                objectFit='contain'
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
              />
            </div>
          )}
          <MDX components={components}>{post.content}</MDX>
        </>
      )}
    </div>
  )
}

export default BlogPost
