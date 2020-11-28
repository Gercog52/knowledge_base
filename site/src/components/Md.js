import React from 'react'
import { graphql } from "gatsby"
import { ExitFolderBtn } from './ExitDirectoryBtn'
import '../styles/viewerForlder.css'

export default function Md(props) {
  return (
    <>
      <ExitFolderBtn path={props.path}/>
      <div dangerouslySetInnerHTML={{
        __html:props.data.markdownRemark.html
      }}></div>
    </>
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