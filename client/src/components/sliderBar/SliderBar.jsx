import React from 'react'
import { Link } from 'react-router-dom'
import './sliderBar.css'

function SliderBar() {
  return (
    <div className='sliderBar'>
        <Link to="/"></Link>
        <Link to="/create">Create Country</Link>
        <Link to="/home">Home</Link>
        <Link to="/update">Update Country</Link>

    </div>
  )
}

export default SliderBar