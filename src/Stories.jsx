import React from 'react'
import { useGlobalContext } from './context'

const Stories = () => {

  const { removePost,isloading, nbPages, hits } = useGlobalContext();

  if (isloading) {
    return (
      <h1 className="loading-mess">Loading...</h1>
    )
  }
  return (
    <>
    <div className="stories-div">
    {
        hits.map((i) => {
          const { author, objectID, title, url, num_comments } = i;
          return (
            <div className="card" key={objectID}>
              <h1 >{title}</h1>
              <p> By <span>{author}</span> | <span>{num_comments} </span> comments </p>
              <div className="card-button">
                <a href={url} target='blank'>Read more</a>
                <a  id='removebtn' href="#"onClick={()=>removePost(objectID)} >Remove</a>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Stories