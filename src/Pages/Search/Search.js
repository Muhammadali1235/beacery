import React, { useState } from 'react'
import "./Search.css"
import { FaSearch } from 'react-icons/fa'
import SearchResults from './SearchResults'
function Search({ setResults }) {
  const [input, setInput] = useState("")
  const fetchData = (value) => {
    fetch("http://localhost:5000/student/get")
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value))
        })
        setResults(results)
      })
  }
  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  return (
    <div className='input-wrapper m-auto '>
      <FaSearch id='search-icon' />
      <input type="text" placeholder='Type to search ...' value={input} onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}

export default Search
