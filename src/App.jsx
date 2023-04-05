import React from 'react'
import Search from './Search'
import Pagination from './Pagination'
import Stories from './Stories'
import './App.scss'
const App = () => {
  return (
 <>
 <h1 className='logo'>TECH NEWS</h1>
  <Search/>
  <Pagination/>
  <Stories/>
 </>
  )
}

export default App