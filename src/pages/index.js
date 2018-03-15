/* eslint-disable no-undef */
import React, { Fragment } from 'react'
import graphql from 'graphql'

import { HomeGrid, Photo, Title } from '../components'

export const IndexPage = ({ data }) => {
  const { family, portrait, travel, wedding } = data
  return (
    <Fragment>
      <Title text="Masha Eltsova Photography" />
      <HomeGrid>
        <Photo
          alt="family gallery"
          photo={family.edges[0].node}
          title="Family posing outdoors"
        />
        <Photo
          alt="portrait gallery"
          photo={portrait.edges[0].node}
          title="Model posing"
        />
        <Photo
          alt="travel gallery"
          photo={travel.edges[0].node}
          title="Bali waves"
        />
        <Photo
          alt="wedding gallery"
          photo={wedding.edges[0].node}
          title="Bride & Groom"
        />
      </HomeGrid>
    </Fragment>
  )
}

export const homePageQuery = graphql`
  query HomePageQuery {
    family: allImageSharp(
      filter: { fields: { category: { eq: "family" } } }
      limit: 1
    ) {
      edges {
        node {
          sizes(cropFocus: CENTER, maxHeight: 400, quality: 90) {
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
          sizes(cropFocus: CENTER, maxHeight: 400, quality: 90) {
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
          sizes(cropFocus: CENTER, maxHeight: 400, quality: 90) {
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
          sizes(cropFocus: CENTER, maxHeight: 400, quality: 90) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
