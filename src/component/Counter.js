import React, { Component } from "react";

class Counter extends Component {
  incrementIfOdd = () => {
    const { value, onIncrement } = this.props; 
    if (value % 2 !== 0) {
      onIncrement();
    }
  }
  incrementAsync = () => {
    const { onIncrement } = this.props;
    setTimeout(onIncrement, 1000);
  }
  render = () => {
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <p>
        Click: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.incrementIfOdd}>incrementIfOdd</button>
        <button onClick={this.incrementAsync}>incrementAsync</button>
      </p>
    )
  }
};

export default Counter;