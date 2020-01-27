import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Solarexpalin from './components/Solarexpalin';
import Userdeail from './components/Userdeail';
import solar from './images/posteradeel_1.png';

class App extends React.Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Navbar/> */}
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/Solarexpalin" component={Solarexpalin}/>
      <Route path="/Userdeail" component={Userdeail}/>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
