import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light" style={{'background-color': '#e3f2fd'}}>
  {/* <%= link_to 'Payment System' ,root_path,:className=>"navbar-brand"  %> */}
  <Link className='navbar-brand anchor1' to='/'>Payment System</Link>
  {/* <a className="navbar-brand" href="/">Payment System</a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">


      <li className="nav-item ">
      <Link className='nav-link anchor' to='/plans/new'>ADD NEW PLAN</Link>
      </li>

      <li className="nav-item">
      <Link className='nav-link anchor' to='/plans/subscriptions'>Subscriptions</Link>
      </li>

      <li className="nav-item">
      <Link className='nav-link anchor' to='/usages'>New Usage</Link>
      </li>

      <li className="nav-item">
      <Link className='nav-link anchor' to='/usages/show'>Show Usages</Link>

      </li>

      <li className="nav-item">
      <Link className='nav-link anchor' to='/'>SignOut</Link>

      </li>
      <li className="nav-item">
      <Link className='nav-link anchor' to='/'>Edit Profile</Link>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Header;
