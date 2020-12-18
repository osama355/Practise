import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  Increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
    console.log(this.state.count);
  }

  IncrementFive() {
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
  }
  // Increment() {
  //   this.setState(
  //     {
  //       count: this.state.count + 1
  //     },
  //     () => {
  //       console.log(this.state.count);
  //     }
  //   );
  // }
  // IncrementFive() {
  //   this.Increment();
  //   this.Increment();
  //   this.Increment();
  //   this.Increment();
  //   this.Increment();
  // }

  render() {
    return (
      <>
        <h1>counter {this.state.count}</h1>
        <button onClick={() => this.IncrementFive()}>Increment</button>
      </>
    );
  }
}

export default Counter;
