import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styled from 'styled-components'

import PostListing from '../components/Posts/PostListing'

import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.description}</p>
    <p>By {data.site.siteMetadata.author}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {data.allMarkdownRemark.edges.map(({ node }, index) => {
      return <PostListing key={node.id} post={node} />
    })}
    <Img fluid={data.imageOne.childImageSharp.fluid} />
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        author
        description
      }
    }

    imageOne: file(relativePath: { eq: "images/CAS-paint-background.jpg" }) {
      ...fluidImage
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`
