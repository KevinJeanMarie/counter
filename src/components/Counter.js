
import React from 'react';
class Counter extends React.Component {

    
    render() {
    return(
    <div>
        <h1>Counter</h1>
        <h2>{this.props.count}</h2>
        <button class="btn1" onClick={this.props.substract}>-</button>
        <button class="btn2" onClick={this.props.increment}>+</button>

        
        
  
    </div>
    )
  
    }
  }
  export default Counter;
  
  