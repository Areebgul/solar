import React from 'react'
import { Link } from 'react-router-dom';
import solarbigimg from '../images/posteradeel_1.jpg';

const Solarexpalin=()=>{
        return (
            <div class="body">
  <img src={solarbigimg} alt="Avatar" style={{ height:"470px",width:"100%"}}/>
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
        )
}

export default Solarexpalin
