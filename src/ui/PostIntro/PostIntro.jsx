import MDX from "@mdx-js/runtime"
import Link from 'next/link'

import DraftBadge from "src/ui/DraftBadge"
import styles from 'src/ui/PostIntro/styles.module.css';

const Component = ({ post }) => <div className={styles.container}>
              <h2 className={styles.title}>
                <Link href={"/" + post.slug} passHref>
                  <a>{post.title}</a>
                </Link>
                {post.draft && <div className={styles.draft}><DraftBadge /></div>}
              </h2>
              <div className={styles.content}>
                <MDX>{post.excerpt}</MDX>
              </div>
</div>;

export default Component;