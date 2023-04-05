import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
 const {query,searchPost}= useGlobalContext();
  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input type="text"
          value={query}
          onChange={(e)=>searchPost(e.target.value)} 
          placeholder='Search here...' autoComplete='off' />
        </div>
      </form>
    </div>
  )
}

export default Search