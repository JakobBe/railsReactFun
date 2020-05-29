import React from 'react';

const Header = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-item">Sign Up</div>
      <div className="navbar-item">Log In</div>
      <i className="fas fa-cogs navbar-item" onClick={() => props.onSettingClick()}></i>
    </div>
  );
}

export default Header;