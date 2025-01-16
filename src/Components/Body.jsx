import React from 'react'
import ResCard from './ResCard'

export const Body = () => {
  return (
    <div className='body-component'>
        <div className="search-bar">search</div>
        <div className="card-container">
            <ResCard/>
        </div>
    </div>
  )
}

export default Body