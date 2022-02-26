import React, { Component } from 'react';

import Nav from './components/navbar'
import Herosection from './components/herosection';
import Image from './components/Image';
import Footer from './components/Footer';

class App extends Component{
  render(){
  return (
    <div className="all">
      <Nav/>
      <Herosection/>
      <Image/>
      <Footer/>
    </div>
  );
}
}

export default App;
