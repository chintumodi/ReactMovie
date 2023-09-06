import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className="header_left">
        <Link to="/"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""  className='header_icon'/></Link>
        <Link to="/movies/popular"><img src="header_icon" alt="" />Popular</Link>
        <Link to="/movies/top_rated"><img src="header_icon" alt="" />Top Rated</Link>
        <Link to="/movies/upcoming"><img src="header_icon" alt="" />Upcoming</Link>
      </div>
      <div className="header-right">
      <i class="fa-solid fa-user"></i>
      </div>
    </div>
  )
}

export default Header
