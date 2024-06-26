import React from 'react'
import bell from './images/bellIcon.svg'
import Pavatar from './images/screen1/dashboard-avatar.jpg'
import Search from './search'
import './styles/header.css'

function Header() {
  return (
    <header>
        <nav className='navbar'>
            <div className='navbar-menu'>
              <ul className='navbar-menu-list'>
                <li>
                <Search />
                </li>
                <li>
                  <a href='#'>
                  FeedBack
                  </a>
                </li>
                <li>
                <a href='#'>
                  Contacts
                  </a>
                </li>
                <li>
                <a href='#'>
                  Help
                  </a>
                </li>
              </ul>
                </div>
              <div className='navbar-end'>
              <ul className='navbar-end-list'>
                    <li>
                      <a href='#'>
                    <img src={bell} alt='notification' className='bell' />
                      </a>
                    </li>
                    <li>
                    <a href='#'>
                <img src={Pavatar}alt='profile' className='p-avatar'/>
                </a> 
                    </li>
              </ul>
            
                
            </div>
        </nav>
    </header>
  )
}

export default Header