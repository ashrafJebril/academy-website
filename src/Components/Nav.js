import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import "./responsive.css";


class  Nav extends Component {
constructor(){
  super()
  
}

currentSideNavStatus = 0;

switchSideNav = () => {
 console.log('ashraf');
  if(1 == this.currentSideNavStatus){
    
    document.getElementById('sidenav-shader').style.display = 'none';
    document.getElementById('sidenav').setAttribute('class','sideNav-holder');
    this.currentSideNavStatus = 0;
  }else{
    document.getElementById('sidenav-shader').style.display = 'block';
    document.getElementById('sidenav').setAttribute('class','sideNav-holder opened-sidenav');
    this.currentSideNavStatus = 1;
  }
}
render(){
  return(
    <div>

      <div id="sidenav-shader" onClick={this.switchSideNav}></div>

    <div id="sidenav" className="sideNav-holder">

      <div class="closenav-button-holder">
      <a href="javascript:void(0)" onClick={this.switchSideNav}>&times;</a>
      </div>

      <div className="sidenav-mainlinks-holder">
        <ul>
          <li><a href="javascript:void(0)">Home</a></li>
          <li><a href="javascript:void(0)">Courses</a></li>
          <li><a href="javascript:void(0)">Pages</a></li>
          <li><a href="javascript:void(0)">Events</a></li>
          <li><a href="javascript:void(0)">About us</a></li>
          <li><a href="javascript:void(0)">Professors</a></li>
        </ul>
      </div>
    </div>


    <div className="row nav-row">
      <div className="uppermenu-holder">
        <div className="contacts-holder">
       <p><i class="fa fa-map-marker" aria-hidden="true"></i>3147 libby street LA CA</p>
       <p><i class="fa fa-phone" aria-hidden="true"></i>(800)2345-6789</p>
       <p><i class="fa fa-envelope" aria-hidden="true"></i>contact@academic.com</p>
      </div>
        <div className="sm-holder">
          <a href="javascript:void(0)"><i class="fa fa-facebook-f"/></a>
          <a href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
          <a href="javascript:void(0)"><i class="fa fa-linkedin"></i></a>
          <a href="javascript:void(0)"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>

    <div className="row white-nav-row">
      <div className="mainlinks-holder">

        <div className="logo-holder">logo here</div>

        <div className="mainNav-holder">
          <ul>
            <li className="responsive-view-nav"><a href="javascript:void(0)" onClick={this.switchSideNav}><i class="fa fa-bars" aria-hidden="true"></i> menu</a></li>
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






}

export default Nav