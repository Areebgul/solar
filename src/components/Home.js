import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { FullPage, Slide } from 'react-full-page';
import axios from 'axios';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './landingcss.css';   //css landing page
import solarbigimg from '../images/posteradeel_1.jpg';
import Energy from '../images/Energy.png';

import solar from '../images/solar-panels.png';
import battery from '../images/battery.png';
import logo from '../images/circleA aditech logo-01.png';
  
const style = {
  width: '50%',
  height: '50%'
}

export class Home extends Component {

  
  constructor(props){
    super(props)
    this.state={
      fullName:'',
      lastname:'',
      email:'',
      city:'',
      Number:'',
      message:''

    }
}

handleSubmit = (event) => {
    event.preventDefault()
    const obj = this.state
    console.log(obj)
    console.log(this.state.fullName)

    axios.post('https://www.aditechaps.com/react_api/proses-api.php', obj)
    .then(res => console.log(res.data))

    this.setState({
        fullName:'',
        lastname:'',
        email:'',
        city:'',
        Number:'',
        message:''
    })
}


handleInputChange = (event) => {
    event.preventDefault()
    // console.log(event)
    // console.log(event.target.name)
    // console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value});

}
    
   
  render() {
    return(
      <div>
<FullPage >
        <Slide>
            <div class="backgroundimg body">
                <nav>
            <div class="nav-wrapper" >
            <h5 href="/" class="brand-logo">AdiTech</h5>
              <ul id="nav-mobile" class="right">
                <li class="homemid"><Link to="/">Home</Link></li>
                <li class="aboutmid"><Link to="/about">About</Link></li>
                <li class="solarexpalinmid"><Link to="/solarexpalin">Solarexpalin</Link></li>
                <li class="userdeailmid"><Link to="/Userdeail">Userdeail</Link></li>
              </ul>
            </div>
          </nav>
          <h5 class="aditechsolar">AdiTech Solar</h5>
                <h3 class="margintop"><b>Power Everything</b></h3> 
                <div class="row paddingL">
      <div class="col s3 ">
      <img class="solarimg" src={solar}/>
        
        <p class="margintopagain1"><b>Convert sunlight</b></p>
        <p class="margintopagain2"><b>into Energy</b></p>
        </div>
      <div class="col s3">
      <img class="solarimg" src={battery}/>
        <p class="margintopagain1"><b>Store Energy</b></p>
        <p class="margintopagain2"><b>With Powerwall</b></p>
      </div>
      <div class="col s3">
      <h5 style={{color:"white",paddingTop:"-24px"}}><b>24/7</b></h5>
        <p class="margintopagain1"><b>Access Backup</b></p>
        <p class="margintopagain2"><b>Power Anytime</b></p>
      </div>
      <div class="col s3 buttonmargin">
      <button class="buttoninhomepage button5" ><b>ORDER NOW</b></button>
      </div>
    </div>
   </div>
        </Slide>
        {/* solar image page */}
        <Slide>
   <div class="body">
  <img src={solarbigimg} class="solarbigimg" alt="Avatar" style={{ height:"470px",width:"100%"}}/>
  <p class="sloarexplain1 " style={{ margin:"0px", marginBottom:"-11px" ,marginTop:"18px" , marginLeft:"-745px", fontSize: "18px", color:"#909090"}}>Commercial Solar</p>
    <div class="row">
    <div class="producecleanenergy col s6">
      <div  class="solarline1"><b>Produce Clean Energy</b></div>
      <div class="row" style={{paddingLeft:"172px", paddingTop:"17px"}}>
        <div class="col s6 ">
    <button class="buttonaftersolarimg button5" ><b>ORDER NOW</b></button>
    </div>
    <div class="col s4 ">
    <button class="buttonaftersolarimg button5" ><b>LEARN MORE</b></button>
    </div>
    </div>
      </div>
      <div class="solarexpalin col s6" style={{marginTop:"-9px" ,marginLeft:"-40px"}} >
        <p style={{color:"#333333", marginLeft:"-150px"}}>Solar panels generate energy from your commercial building or </p><br/>
      <p style={{color:"#333333", marginLeft:"-360px" , marginTop:"-41px"}}>office rooftop to save you money.</p></div>
    </div>
   
            </div>
            </Slide>

                                               {/* battery */}

            <Slide>

<div class="body">
<img src={Energy} alt="Avatar" style={{ height:"470px",width:"100%"}}/>
<p class="sloarexplain1 " style={{ margin:"0px", marginBottom:"-11px" ,marginTop:"18px" , marginLeft:"-745px", fontSize: "18px", color:"#909090"}}>Commercial Solar</p>
 <div class="row">
 <div class="producecleanenergy col s6">
   <div style={{paddingLeft:"95px"}} ><b>Produce Clean Energy</b></div>
   <div class="row" style={{paddingLeft:"172px", paddingTop:"17px"}}>
     <div class="col s6 ">
 <button class="buttonaftersolarimg button5" ><b>ORDER NOW</b></button>
 </div>
 <div class="col s4 ">
 <button class="buttonaftersolarimg button5" ><b>LEARN MORE</b></button>
 </div>
 </div>
   </div>
   <div class="solarexpalin col s6" style={{marginTop:"-9px" ,marginLeft:"-40px"}} ><p style={{color:"#333333", marginLeft:"-150px"}}>Solar panels generate energy from your commercial building or </p><br/>
   <p style={{color:"#333333", marginLeft:"-360px" , marginTop:"-41px"}}>office rooftop to save you money.</p></div>
   
 </div>

         </div>
         </Slide>

                                          {/* userDetail  */}


<Slide>
<div  style={{backgroundColor:"#F3F3F3", height: "100vh"}}>
               <form onSubmit={this.handleSubmit}>   
    <div class="row">
    <div class="col s6">
    <img style={{height:"200px", marginLeft:"-470px", marginTop:"-53px"}} src={logo}/>
    <div style={{marginTop:"-110px",marginLeft:"-120px"}}>
      <div class="producecleanenergy"  ><h4><b>Learn More</b></h4></div>
      <div class="row" style={{paddingLeft:"120px", marginTop:"-15px"}}>
      <p style={{fontWeight:"bold"}}>Speak to a Aditech Advisor and learn more</p>
      <p style={{marginLeft:"20px", marginTop:"-17px",fontWeight:"bold"}}>about the best value of any national provider.</p>
    </div>
    <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    </div>
      </div>

    <form class="col s6">
      <div class="row" >
        <div class="input-field col s6">
          <input name='fullName' onChange={this.handleInputChange} id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" name='lastname' onChange={this.handleInputChange} class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>

    <div class="row" style={{marginTop:"-42px"}}>
        <div class="input-field col s6">
        <input id="email_inline" type="email" name='email' onChange={this.handleInputChange} class="validate"/>
            <label for="email_inline">Email</label>
            <span class="helper-text" data-error="wrong" data-success="right"></span>
        </div>
        <div  class="input-field col s6">
        <input id="input_text" type="text" name='Number' onChange={this.handleInputChange} data-length="10"/>
            <label for="number">Phone Number</label>
        </div>
      </div>
    <div class="row">
    <select name='city' onChange={this.handleInputChange} class="browser-default col s6">
    <option value="" disabled selected>Choose your city</option>
    <option value="Faisalabad">Faisalabad</option>
    <option value="Lahore">Lahore</option>
    <option value="Multan">Multan</option>
  </select>
      </div>
      <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s11">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" class="materialize-textarea" name='message' onChange={this.handleInputChange}></textarea>
          <label for="icon_prefix2">Message</label>
        </div>
      </div>
      <div>
      </div>
    </form>
  </div>
    </form>
  </div>
  <div class="row">
  <div style={{marginLeft:"770px"}} class="col s4">
  <button class="block">Submit</button>
  </div>
  </div>
  <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="">Smart Solar Solution
for Your Business</h5>
                <p class="">We don’t just install solar We make sure it works!</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="">Contact Us</h5>
                <ul>
                <li><a class="black-text" >+92-3008837687</a></li>
                  <li><a class="black-text" href="https://www.facebook.com/search/top/?q=aditech%20power%20solution%20private%20limited&ref=eyJzaWQiOiIwLjE5MTI1NTQxNzU2NDc3ODI2IiwicXMiOiJKVFZDSlRJeVlXUnBkR1ZqYUNVeU1IQnZkMlZ5SlRJd2MyOXNkWFJwYjI0bE1qQndjbWwyWVhSbEpUSXdiR2x0YVhSbFpDVXlNaVUxUkEiLCJndiI6ImJlZTA5ZjkzZmE3MzJjZmE1OWExY2I2ZDlmNDUwZDM4OTI0MjRlNDkiLCJlbnRfaWRzIjpbXSwiYnNpZCI6ImE1Mzg5NzNmNDlkMDk4NWRkMjFmMGZlZGI1ZWNiY2RhIiwicHJlbG9hZGVkX2VudGl0eV9pZHMiOm51bGwsInByZWxvYWRlZF9lbnRpdHlfdHlwZSI6bnVsbCwicmVmIjoiYnJfdGYiLCJjc2lkIjpudWxsLCJoaWdoX2NvbmZpZGVuY2VfYXJndW1lbnQiOm51bGwsImNsaWVudF90aW1lX21zIjoxNTc4ODMzOTgwMDQ2fQ&epa=SEARCH_BOX">Facebook</a></li>
                  <li><a class="black-text" href="#!">Link 3</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container black-text">
           AdiTech © 2020 
            </div>
          </div>
        </footer>
  </form>
            </div>

         
            
          </Slide>

        </FullPage>
      </div>
            
)
}
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBWlt93Fh4Q3UU-vp3Euxu72sSTRJlJw8s")
})(Home)