// Navtive
const { resolve } = require('path')

// Package
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  // NOTE: Cannot use fragments in gatsby-node.js!!!
  // REVIEW: Setting 'quality' of photos here. Inc/Dec as needed.
  return new Promise((_resolve, reject) => {
    graphql(`
      {
        allImageSharp {
          edges {
            node {
              fields {
                category
              }
              id
              resolutions(quality: 70) {
                base64
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    `).then(result => {
      // Handle error case.
      if (result.errors) return reject(result.errors)
      // Constants for the following code.
      const categories = ['family', 'portrait', 'travel', 'wedding']
      const allImages = result.data.allImageSharp.edges
      // Create gallery pages.
      categories.map(category =>
        createPage({
          path: `/gallery/${category}`,
          component: resolve('src/templates/gallery.js'),
          context: {
            photos: allImages.filter(
              ({ node }) => node.fields.category === category
            )
          }
        })
      )
      // Finalize Promise
      _resolve()
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'ImageSharp') {
    const value = createFilePath({
      node,
      getNode
    })
    // before: '/portrait/girl_model.jpg'
    const category = value.substring(1, value.indexOf('/', 1))
    // after: 'portrait'
    createNodeField({
      name: 'category',
      node,
      value: category // 'family', 'logo', 'portrait', 'travel', or 'wedding'
    })
  }
}
