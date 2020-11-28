import React from 'react'
import { Link } from "gatsby"
import '../styles/viewerForlder.css'

export const ExitFolderBtn = (props) => {
  let prevDir = props.path.split('/')
      prevDir.length = prevDir.length - 2
      prevDir = prevDir.join('/')
      prevDir+='/'
  return (
    <div className="exitFolderBtn">
      <Link to={prevDir} 
            dangerouslySetInnerHTML={{
              __html:`..`
            }}
      />
    </div>
  )
}