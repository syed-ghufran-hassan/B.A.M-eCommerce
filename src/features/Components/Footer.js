import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='Footer'>
      BAM E-Commerce | Copyright  &copy;  {year}
    </footer>
  )
}

export default Footer;