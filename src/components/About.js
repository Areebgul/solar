import React, { Component } from 'react'
import solar from '../images/posteradeel_1.jpg';
import background from '../images/background.jpg';
import { Link } from 'react-router-dom';
import './landingcss.css';   //css landing page



export class About extends Component {
    render() {
        return (
          
          <div class="backgroundimg">
              <nav class="borderremove">
            <div class="nav-wrapper backgroundimg" >
              <a href="#" class="brand-logo">Logo</a>
              <ul id="nav-mobile" class="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Solarexpalin">Solarexpalin</Link></li>
                <li class="userdeailmid"><Link to="/Userdeail">Userdeail</Link></li>

              </ul>
            </div>
          </nav>

          
                <h1 >I am in about page</h1>

                
                {/* <nav class="backgroundimg">
  <div  >
    <ul >
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}

    <div class="container">
    <div class="row">
    <div class="col s6 m4">
      <div class="card blue-grey darken-1">
  <img src={solar} alt="Avatar" style={{width:"100%"}}/>
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>
    </div>


    <div class="col s6 m4">
      <div class="card blue-grey darken-1">
  <img src={solar} alt="Avatar" style={{width:"100%"}}/>
  <div class="container">
  <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>
    </div>

    <div class="col s6 m4">
      <div class="card blue-grey darken-1">
  <img src={solar} alt="Avatar" style={{width:"100%"}}/>
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>
    </div>
</div>



  
            </div>
            </div>
        )
    }
}

export default About
