import React from 'react'
import { Link } from 'react-router-dom'
import './sliderBar.css'
import Logo from '../../assets/logo.png'

function SliderBar() {
  return (
    <div className='sliderBar'>
        <img src={Logo} alt="" />
        <Link to="/"></Link>
        <Link to="/create" >Create Country</Link>
        <Link to="/home" >Home</Link>
    </div>
  )
}

export default SliderBar