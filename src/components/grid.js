import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import chunk from 'lodash.chunk'
import styles from './grid.module.css'

if (typeof window !== 'undefined') {
  window.postsToShow = 10
}

export default class Inspiration extends Component {
  postsChunk = 10

  constructor() {
    super()
    const postsToShow = typeof window !== 'undefined' ? window.postsToShow : this.postsChunk

    this.state = {
      showingMore: postsToShow > this.postsChunk,
      postsToShow
    }
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
    window.scrollTo(0, window.gridScrollPosition)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.postsToShow = this.state.postsToShow
    window.gridScrollPosition = window.scrollY
  }

  handleShowMoreClick = () => {
    this.setState(prevState => ({
      postsToShow: prevState.postsToShow + this.postsChunk,
      showingMore: true
    }))
  }

  render() {
    return (
      <div>
        <div className={styles.navBackground}></div>
        <div className={styles.pageTitle}>#Inspiration</div>
        <div className={styles.tagFilter}>
          {this.props.data.allContentfulTag.edges.map(({ node }) => (
            <Link to={`/tag/${node.tag.toLowerCase()}`} key={node.id} className={this.props.tag === node.tag.toLowerCase() ? styles.activeTag : undefined}>
              <p>#{node.tag}</p>
            </Link>
          ))}
        </div>
        {chunk(this.props.data.allContentfulBlogPost.edges.slice(0, this.state.postsToShow), 10).map((chunk, i) => (
          <div key={i} className={styles.blogArticleListview}>
            {chunk.map(edge => {
              const { id, slug, image, title, body, tags } = edge.node
              return (
                <div key={id} className={styles.blogArticleListview__element}>
                  <Link to={`/post/${slug}`}>
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
        {this.props.data.allContentfulBlogPost.edges.length > this.postsChunk && !this.state.showingMore && (
          <div className={styles.loadMore}>
            <div className={styles.loadMore__button} onClick={this.handleShowMoreClick}>mehr laden</div>
          </div>
        )}
      </div>
    )
  }
}