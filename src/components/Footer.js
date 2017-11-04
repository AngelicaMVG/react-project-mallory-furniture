import React, {Component} from 'react';
import LogoBlack from '../images/mf-logo-black.svg';

export default class Footer extends Component {
  render() {
    return(
      <div className='footer-container'>
        <div className='logo'>
          <img src={LogoBlack} alt=""/>
          <hr/>
        </div>
        <div className='menu-footer-container'>
          <div>
            <p className='menu-title'>Company</p>
            <ul className='list'>
              <li>About</li>
              <li>Prices</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div>
            <p className='menu-title'>Categories</p>
            <ul className='list'>
              <li>Seating</li>
              <li>Tables</li>
              <li>Misc</li>
            </ul>
          </div>
          <div>
            <p className='menu-title'>Social</p>
            <ul className='social-network list'>
              <li><i className='fa fa-instagram'></i></li>
              <li><i className='fa fa-twitter'></i></li>
              <li><i className='fa fa-pinterest'></i></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
