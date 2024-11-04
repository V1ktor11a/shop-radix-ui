import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import {
  IoMenu,
  IoClose,
  IoPersonCircle,
  IoMoon,
  IoSunny,
  IoCart,
} from 'react-icons/io5';
import './Header.css';

const Header = ({ theme, toggleTheme, itemCount, addItemToCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <div className='header-logo'>Logo</div>
      <nav className='header-nav'>
        <a href='#home' className='header-link'>
          Home
        </a>
        <a href='#about' className='header-link'>
          About
        </a>
        <a href='#services' className='header-link'>
          Services
        </a>
        <a href='#contact' className='header-link'>
          Contact
        </a>
      </nav>
      <div className='header-controls'>
        <button className='theme-toggle' onClick={toggleTheme}>
          {theme === 'light' ? <IoMoon size={20} /> : <IoSunny size={20} />}
        </button>
        <button className='user-button'>
          <IoPersonCircle size={24} />
        </button>
        <button className='cart-button' onClick={addItemToCart}>
          <IoCart size={24} />
          {itemCount > 0 && <span className='badge'>{itemCount}</span>}
        </button>
      </div>
      <div className='mobile-menu'>
        <Popover.Root open={menuOpen} onOpenChange={toggleMenu}>
          <Popover.Trigger className='menu-button' onClick={toggleMenu}>
            {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </Popover.Trigger>
          <Popover.Content className='popover-content'>
            <div className='mobile-nav'>
              <a href='#home' className='mobile-link'>
                Home
              </a>
              <a href='#about' className='mobile-link'>
                About
              </a>
              <a href='#services' className='mobile-link'>
                Services
              </a>
              <a href='#contact' className='mobile-link'>
                Contact
              </a>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    </header>
  );
};

export default Header;
