import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (

    <div>
      <div className="row nav-row">
        <div className="uppermenu-holder">
          <div className="contacts-holder">
         <p><i class="fa fa-map-marker" aria-hidden="true"></i>3147 libby street LA CA</p>
         <p><i class="fa fa-phone" aria-hidden="true"></i>(800)2345-6789</p>
         <p>contact@academic.com</p>
        </div>
          <div className="sm-holder">
            <a href="javascript:void(0)"><i class="fa fa-facebook-f"/></a>
            <a href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
            <a href="javascript:void(0)"><i class="fa fa-linkedin"></i></a>
            <a href="javascript:void(0)">X</a>
          </div>
        </div>
      </div>

      <div className="row white-nav-row">
        <div className="mainlinks-holder">

          <div className="logo-holder">logo here</div>

          <div className="mainNav-holder">
            <ul>
              <li><Link to={{ pathname: "/" }}>Home</Link></li>
              <li><Link to={{ pathname: "/" }}>Courses</Link></li>
              <li><Link to={{ pathname: "/" }}>Pages</Link></li>
              <li><Link to={{ pathname: "/" }}>Events</Link></li>
              <li><Link to={{ pathname: "/" }}>About Us</Link></li>
              <li><Link to={{ pathname: "/Professors" }}>Professors</Link></li>
              <li><button type="button" data-toggle="modal" data-target="#exampleModal" >Apply Online</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Nav