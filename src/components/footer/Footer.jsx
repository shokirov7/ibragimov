import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
      <h1 className="footer_title">Остались вопросы?</h1>
      <p className='footer_subtitle'>Можешь задать их напрямую мне в личный телеграм</p>
      <Link className='footer_button' target='_blank' to="https://t.me/Ibragimov_2360">Написать мне в Телеграм</Link>
    </footer>
  )
}

export default Footer
