import React  from 'react'
import { Link } from 'react-router-dom';
import background from '../images/background.jpg';
import './landingcss.css';   //css landing page


function Navbar (){
    return ( 
       
            <nav >
            <div class="nav-wrapper backgroundimg" >
              <a href="#" class="brand-logo">Logo</a>
              <ul id="nav-mobile" class="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li class="solarexpalinmid"><Link to="/solarexpalin">Solarexpalin</Link></li>
                <li class="userdeailmid"><Link to="/Userdeail">Userdeail</Link></li>

             </ul>
            </div>
          </nav>
          

          
    )
    }


export default Navbar;
