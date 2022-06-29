import React from 'react';


function Header() {
  return (
    <div className='wrapper'>
      <nav className='navigation'>
        <ul className='list-navigation'>
          <li>HOME</li>
          <li>BAND</li>
          <li>TOUR</li>
          <li>CONTACT</li>
          <li>MORE</li>
        </ul>
              <form className='search-navigation'>
          <input type="text" name='text' className='search' placeholder='Search here!' />
          <input type="submit" name='submit' className='submit' value='Search' />
        </form>
        </nav>
    </div>
  );
}

export default Header;
