import React from 'react'
import "../Home/Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='Home-container'>
            <h1 className='Home-main'>Geo App</h1>
            <Link to="/home" className='Button-home'>
                Home
            </Link>
    </div>
  )
}

export default Home
