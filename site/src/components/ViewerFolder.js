import React from 'react'
import { graphql } from "gatsby"
import { Link } from "gatsby"
import '../styles/viewerForlder.css'

export default function ViewerFolder (props) {
  console.log(props);
  console.log(props.data.allDirectory.edges);
  let prevDir = props.path.split('/');
      prevDir.length = prevDir.length - 2;
      prevDir = prevDir.join('/');
      prevDir+='/';
  console.log(prevDir);
  return (
    <div>
      {
        props.path !== '/' &&
        <div className="exitFolderBtn">
          <Link to={prevDir} 
                dangerouslySetInnerHTML={{
                  __html:`..`
                }}
          />
        </div>
        
      }
      {props.data.allDirectory.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug} >
            {node.name}
          </Link>
        </div>
      ))}
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
          id
          name
        }
      }
    }
  }
`