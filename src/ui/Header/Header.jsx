import { MDXProvider } from "@mdx-js/react"
import Link from 'next/link'

import config from "blog.config"
import styles from 'src/ui/Header/styles.module.css'

const Header = (props) => {
  return <MDXProvider>
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/" passHref>
          <a className={styles.home}>{config.title}</a>
        </Link>
      </h1>

      <a className={styles.github} href="https://github.com/jobandtalent/chuletest">Github</a>

    </header>
  </MDXProvider>
}

export default Header
