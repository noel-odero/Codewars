import React from 'react';
​
export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
​
  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };
​
  handleDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  };
​
  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
        <button id="decrement" onClick={this.handleDecrement}>
          Decrement
        </button>
        <button id="increment" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}
​