/* eslint-disable no-undef */

import React from 'react'
import Img from 'gatsby-image'

import './index.css'

const IndexPage = ({ data }) => {
  const { family, portrait, travel, wedding } = data
  return (
    <div className="grid" style={{ flex: 1 }}>
      <Img
        alt="Family Gallery"
        className="box"
        sizes={family.edges[0].node.sizes}
      />
      <Img
        alt="Portrait Gallery"
        className="box"
        sizes={portrait.edges[0].node.sizes}
      />
      <Img
        alt="Travel Gallery"
        className="box"
        sizes={travel.edges[0].node.sizes}
      />
      <Img
        alt="Wedding Gallery"
        className="box"
        sizes={wedding.edges[0].node.sizes}
      />
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    family: allImageSharp(
      filter: { fields: { category: { eq: "family" } } }
      limit: 1
    ) {
      edges {
        node {
          sizes(cropFocus: CENTER, quality: 90) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
    }
    logo: imageSharp(fields: { category: { eq: "logo" } }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    portrait: allImageSharp(
      filter: { fields: { category: { eq: "portrait" } } }
      limit: 1
    ) {
      edges {
        node {
          sizes(cropFocus: CENTER, quality: 90) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
    }
    travel: allImageSharp(
      filter: { fields: { category: { eq: "travel" } } }
      limit: 1
    ) {
      edges {
        node {
          sizes(cropFocus: CENTER, quality: 90) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
    }
    wedding: allImageSharp(
      filter: { fields: { category: { eq: "wedding" } } }
      limit: 1
    ) {
      edges {
        node {
          sizes(cropFocus: CENTER, quality: 90) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
