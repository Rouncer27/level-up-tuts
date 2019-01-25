import React, { Component } from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

class PostPage extends Component {
  render() {
    return (
      <Layout>
        <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
        <p>{this.props.data.markdownRemark.excerpt}</p>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      frontmatter {
        title
      }
    }
  }
`

export default PostPage
