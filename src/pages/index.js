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
    <p style={{ fontFamily: 'Homemade Apple' }}>
      {data.site.siteMetadata.description}
    </p>
    <p style={{ fontFamily: 'Homemade Apple' }}>
      Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
      luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
      commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
      tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
      sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
      Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
    </p>
    <h1 style={{ fontFamily: 'Homemade Apple' }}>
      H1: Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
      mauris sit amet orci. Aenean dignissim pellentesque felis.
    </h1>
    <h2 style={{ fontFamily: 'Homemade Apple' }}>
      H2: Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
      mauris sit amet orci. Aenean dignissim pellentesque felis.
    </h2>
    <h3 style={{ fontFamily: 'Homemade Apple' }}>
      H3: Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
      mauris sit amet orci. Aenean dignissim pellentesque felis.
    </h3>
    <h4 style={{ fontFamily: 'Homemade Apple' }}>
      H4: Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
      mauris sit amet orci. Aenean dignissim pellentesque felis.
    </h4>
    <h5 style={{ fontFamily: 'Homemade Apple' }}>
      H5: Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
      mauris sit amet orci. Aenean dignissim pellentesque felis.
    </h5>
    <h6 style={{ fontFamily: 'Homemade Apple' }}>
      H6: Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
      mauris sit amet orci. Aenean dignissim pellentesque felis.
    </h6>
    <p style={{ fontFamily: 'Homemade Apple', fontWeight: 'bold' }}>
      Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
      luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
      commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
      tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
      sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
      Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
    </p>
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
