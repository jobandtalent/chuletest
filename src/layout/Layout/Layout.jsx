import PropTypes from "prop-types"

import Head from "src/layout/Head"
import Header from "src/ui/Header"
import Main from "src/ui/Main"
import Footer from "src/ui/Footer"

import styles from "src/layout/Layout/styles.module.css"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <div className={styles.container}>
        <Header />

        <Main>{props.children}</Main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Layout
