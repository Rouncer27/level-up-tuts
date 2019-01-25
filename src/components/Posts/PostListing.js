import { Link, graphql } from 'gatsby'
import React, { Component } from 'react'

class PostListing extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>
          <Link to={this.props.post.fields.slug}>
            {this.props.post.frontmatter.title}
          </Link>
        </h1>
        <span>{this.props.post.frontmatter.date}</span>
        <div dangerouslySetInnerHTML={{ __html: this.props.post.html }} />
      </div>
    )
  }
}

export default PostListing
