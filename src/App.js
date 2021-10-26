import React from 'react';
import './App.css';
import Counter from "./components/Counter.js"

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      count : 0,
      
    };
  }

  handlePlusClick = () => {
    if (this.state.count < 100)
    this.setState({count: this.state.count + 20})
  }
  handleMinusClick = () => {
    if (this.state.count > 0)
    this.setState({count: this.state.count - 20})
  };
  
  render() {
    return(
    <div>
      <Counter count={this.state.count} increment={this.handlePlusClick} substract ={this.handleMinusClick}/>
      <Counter count={this.state.count} increment={this.handlePlusClick} substract ={this.handleMinusClick}/>
    </div>
    
      
    );

  }

}
export default App;
