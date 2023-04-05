import React from 'react'
import { useGlobalContext } from './context'

const Pagination = () => {
  const {page,nbPages,getnextPage,getprevPage}=useGlobalContext();
  return (
   <>
   <div className='paginationBtn'>
    <button onClick={()=>getprevPage()}> PREV </button>
    <p> {page + 1} of {nbPages} </p>
    <button onClick={()=>getnextPage()}> NEXT </button>
   </div>
   </>
  )
}

export default Pagination