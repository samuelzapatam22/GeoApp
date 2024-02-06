import React from 'react'
import { Link } from 'react-router-dom'
import './sliderBar.css'
import Logo from '../../assets/logo.png'

function SliderBar() {
  return (
    <div className='sliderBar'>
        <img src={Logo} alt="" />
        <Link to="/">Inicio</Link>
        <Link to="/create">Create Country</Link>
        <Link to="/home">Home</Link>
        <Link to="/update">Update Country</Link>

    </div>
  )
}

export default SliderBar