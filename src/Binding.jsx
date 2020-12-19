import React, { Component } from "react";

class Binding extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Everyone"
    };

    {
      /* third approch */
    }
    // this.EventBind = this.EventBind.bind(this);
  }

  // EventBind() {
  //   this.setState({
  //     message: "Goodby!"
  //   });
  //   console.log(this);
  // }

  // fourth approch
  EventBind = () => {
    this.setState({
      message: "Good Luck"
    });
  };

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>

        {/* Approch one */}
        {/* <button onClick={this.EventBind.bind(this)}>Click</button> */}

        {/* second approch */}
        {/* <button onClick={() => this.EventBind()}>Click</button> */}

        {/* third approch */}
        <button onClick={this.EventBind}>Click</button>
      </div>
    );
  }
}

export default Binding;
