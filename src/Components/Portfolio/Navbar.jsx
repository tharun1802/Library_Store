import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h3>Portfolio</h3>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
