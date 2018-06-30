import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import chunk from 'lodash.chunk'
import styles from './inspiration.module.css'

export default class Inspiration extends Component {
  postsChunk = 10

  state = {
    postsToShow: this.postsChunk,
    showingMore: false
  }

  update() {
    const distanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 100) {
      this.setState(prevState => ({ postsToShow: prevState.postsToShow + this.postsChunk }))
    }
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleShowMoreClick = () => {
    this.setState(prevState => ({
      postsToShow: prevState.postsToShow + this.postsChunk,
      showingMore: true
    }))
  }

  render() {  
    return(
      <div>
        <div className={styles.navBackground}></div>
        <div className={styles.pageTitle}>#Inspiration</div>
        {chunk(this.props.data.allContentfulBlogPost.edges.slice(0, this.state.postsToShow), 10).map((chunk, i) => (
          <div key={i} className={styles.blogArticleListview}>
            {chunk.map(edge => {
              const { id, slug, image, title, body, tags } = edge.node
              return (
                <div key={id} className={styles.blogArticleListview__element}>
                  <Link to={`/${slug}`}>
                    <div className={styles.blogPreviewContainer}>
                      <div className={styles.listviewBlogImageContainer}>
                        <Img sizes={image.sizes} className={styles.listviewBlogImage} />
                      </div>
                      <div className={styles.blogExcerptContainer}>
                        <div className={styles.blogArticleListviewMainTitle}>{title}</div>
                        <div className={styles.blogArticleExcerpt}>{body.childMarkdownRemark.excerpt}</div>
                        <div className={styles.tags}>
                          {tags.map(tag => (
                            <p key={tag.id}>#{tag.tag}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        ))}
        {!this.state.showingMore && (
          <div className={styles.loadMore}>
            <div className={styles.loadMore__button} onClick={this.handleShowMoreClick}>mehr laden</div>
          </div>
        )}
      </div>
    )
  }
}

export const query = graphql`
  query InspirationQuery {
    allContentfulBlogPost(sort: {fields: [creationDate], order: DESC}) {
      edges {
        node {
          id
          slug
          image {
            sizes(maxWidth: 1280) {
              ...GatsbyContentfulSizes
            }
          }
          title
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          tags {
            id
            tag
          }
        }
      }
    }
  }
`