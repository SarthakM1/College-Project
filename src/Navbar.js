import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className="container-fluid  ml-auto nav_bg">
            <div className='row'>
                <div className="col-10 mx-auto">

               
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink exact className="navbar-brand" to="">
        <img height="40" width="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5su_e5EULmaSR0GPr9PxMGcOVm22Tsg5Eyg&usqp=CAU" alt="" />
    </NavLink>
    
    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName=""
            
           className="nav-link " aria-current="page" to="/">
              Home
              </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="services">
              Services
              </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="about">
              AboutUs
              </NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="signup">
              SignUp
              </NavLink>
              </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="contact">
              ContactUs
              </NavLink>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
</div>

</div>

</div>
        </>
    );
};

export default Navbar;