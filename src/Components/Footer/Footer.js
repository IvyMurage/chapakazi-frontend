import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
      <footer className='footer-style'>
        <h2>chapa<span id='kazi-footer'>kazi</span></h2>
        <span id="copy-right">CopyRight@2022</span>
        <div className="social-icons">
          <FontAwesomeIcon icon={['square-facebook']} className="social-icon" />
          <FontAwesomeIcon icon={'square-facebook'}className="social-icon" />
          <FontAwesomeIcon icon="ri:twitter-fill" className="social-icon" />
        </div>
      </footer>
    );
  }

