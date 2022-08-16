import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();

    console.log("CONSTRUCTOR");

    // this.state = {...}
  }

  componentDidMount(){
    console.log("COMPONENT_DID_MOUNT");
  }


  render(){


    // this.setState()
    console.log("RENDER");

    return (
      <div className="App">
       
      </div>
    );

  }
 
}

export default App;
