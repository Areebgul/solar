import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
  
export class Userdeail extends Component {
   


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

    axios.post('http://localhost/react/react_api/proses-api.php', obj)
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
            const { formErrors } = this.state;
    return (
            <div>
               <form onSubmit={this.handleSubmit}>
            
   
    <div class="row">
    <div class="col s6">
      <div class="producecleanenergy" style={{paddingLeft:"95px"}} ><h4><b>Learn More</b></h4></div>
      <div class="row" style={{paddingLeft:"172px", paddingTop:"17px"}}>
      <p>Speak to a Aditech Advisor and learn more</p>
      <p>about the best value of any national provider.</p>
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
    </form>
  </div>
    </form>
  </div>
  <button >Submit</button>

</form>
            </div>
        )
    }
}
export default Userdeail
