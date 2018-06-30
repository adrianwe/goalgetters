import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

export default ({ children, data }) => {
  const { title, description, keywords } = data.site.siteMetadata
  const { favicon, navigation } = data.contentfulPage

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords }
        ]}
      >
        <link rel='shortcut icon' href={favicon.file.url} />
      </Helmet>
      <Header title={title} navigation={navigation} />
      {children()}
      <Footer />
    </div>
  )
}

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    contentfulPage(type: { eq: "Landing" }) {
      favicon {
        file {
          url
        }
      }
      navigation {
        linkName
        linkSlug
      }
    }
  }
`