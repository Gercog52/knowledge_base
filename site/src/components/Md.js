import React from 'react'
import { graphql } from "gatsby"

export default function Md(props) {
  return (
    <div dangerouslySetInnerHTML={{
      __html:props.data.markdownRemark.html
    }}></div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`