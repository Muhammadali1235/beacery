import React from 'react'
import "./SearchResult.css"
import { Link } from 'react-router-dom'
function SearchResults({ results }) {
    return (
        <div className='search-result w-[400px] m-auto'>
            {
                results.map((result, id) => {
                    return < Link key={id} className=' text-black   text-center m-auto max-w-[425px] text-sm ' state={result} to={`/user/${result._id}`}>
                        {result.name}
                    </Link >
                })
            }
        </div>
    )
}

export default SearchResults