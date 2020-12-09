import React from 'react'
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { ExitFolderBtn } from './ExitDirectoryBtn'
import folderIcon from '../images/folder.png'
import mdIcon from '../images/md.png'
import '../styles/viewerForlder.css'

export default function ViewerFolder (props) {
  const { path } = props
  console.log(props);
  return (
    <div>
      {
        path !== '/' && 
        <div className="directoryControl">
          <ExitFolderBtn path={path}/>
          <span className="directoryPath">
            {
             props.path.replace('/','~/')
                       .replace(/\/$/m,'')
            }
          </span>
        </div>
      }
      {props.data.allDirectory.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug} className='styledLink'>
            <img src={folderIcon} alt="folder"/> {node.name}
          </Link>
        </div>
      ))}
      <hr/>
      {path !== '/' && 
       props.data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug} className='styledLink'>
            <img src={mdIcon} alt="md"/> {node.parent.base}
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