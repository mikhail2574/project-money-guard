import React from 'react';
import exit from 'ui/icons/close.svg';
import logo from 'ui/icons/logo-second.svg';

export const Header = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <a href="/">
        <img src={logo} alt="logotype" />
        <p>Money Guard</p>
      </a>
      <div>
        <p>username</p>
        <button>
          <img src={exit} alt="logout" />
        </button>
      </div>
    </div>
  );
};

/* <Logo src={mainLogo} alt="logo" />; */
