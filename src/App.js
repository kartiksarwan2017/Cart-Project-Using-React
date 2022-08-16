import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(){
    super();

    console.log("CONSTRUCTOR");
    this.state = {count: 0}

    // this.state = {...}
  }

  componentDidMount(){
    console.log("COMPONENT_DID_MOUNT");
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
    // console.log('prevProps', prevProps);
    // console.log('props', this.props);
    console.log('prevState', prevState);
    console.log('state', this.state);

    if(prevState.count === 0 && this.state.count === 1){
      // actions
      this.setState({count: 100});
    }

    // this.setState({count: 100});
  }

  handleClick = () =>{
    this.setState((prevState) => {
        return {
          count: prevState.count + 1
        }
    });
  }


  componentWillUnmount() {
    // cleanup
    console.log('COMPONENT_UNMOUNT')


  }


  render(){


    // this.setState() - X cant call
    console.log("RENDER");

    return (
      <div className="App">
        {this.state.count}
        &nbsp; &nbsp; 
        <button style= {styles.button} onClick={this.handleClick}>Inc count</button>
       
      </div>
    );

  }
 
}



const styles = {
  button: {
    height: 50,
    width: 100,
    fontSize: 20,
    borderRadius: 4

  }

}

export default App;
