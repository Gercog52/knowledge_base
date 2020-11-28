import React from 'react'
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { ExitFolderBtn } from './ExitDirectoryBtn'
import '../styles/viewerForlder.css'

export default function ViewerFolder (props) {
  const { path } = props
  return (
    <div>
      {
        path !== '/' &&
        <ExitFolderBtn path={path}/>
      }
      {props.data.allDirectory.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug} >
            {node.name}
          </Link>
        </div>
      ))}
      <hr/>
      {path !== '/' && 
       props.data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug} >
            {node.parent.base}
          </Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query($regexpTemplate: String!) {
    allMarkdownRemark(filter: {fields: {slug: {regex: $regexpTemplate}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          parent {
            ... on File {
              base
            }
          }
        }
      }
    }
    allDirectory(filter: {fields: {slug: {regex: $regexpTemplate}}}) {
      edges {
        node {
          fields {
            slug
          }
          id
          name
        }
      }
    }
  }
`