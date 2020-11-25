import React from 'react'
import { graphql } from "gatsby"

export default function ViewerFolder (props) {
  console.log(props);
  return (
    <div>
      data
    </div>
  )
}

export const query = graphql`
  query($slug: String!, $regexpTemplate: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    allDirectory(filter: {fields: {slug: {regex: $regexpTemplate}}}) {
      edges {
        node {
          fields {
            slug
          }
          name
        }
      }
    }
  }
`