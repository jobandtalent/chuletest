import config from "blog.config"
import Layout from "src/layout/Layout"
import Posts from "src/views/Posts"
import Hero from 'src/ui/Hero'
import { getAllPosts } from "src/api"

const PostsPage = ({ posts, prevPosts, nextPosts }) => (
  <Layout
    url={config.url}
    title={config.title}
    description={config.description}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Hero />
    <Posts posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />
  </Layout>
)

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "excerpt",
    "draft",
  ])

  const startIndex = 0
  const endIndex = config.postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 2

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  }
}

export default PostsPage
