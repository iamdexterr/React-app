import React from 'react';

const Header = ({loginStatus,onLogout}) => {
  return (
      <header>
          <div className="logo">React App</div>
         { loginStatus &&  <button className='btn' onClick={()=>{onLogout()}}>Logout</button>}
      </header>
  )
};

export default Header;
