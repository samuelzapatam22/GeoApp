import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sliderBar.css';
import Logo from '../../assets/logo.png';

function SliderBar() {
  const location = useLocation();

  return (
    <div className='sliderBar'>
      <img src={Logo} alt='logo' />
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/create" className={location.pathname === '/create' ? 'active' : ''}>Crear País</Link>
      <Link to="/update" className={location.pathname === '/update' ? 'active' : ''}>Gestionar País</Link>
    </div>
  );
}

export default SliderBar;