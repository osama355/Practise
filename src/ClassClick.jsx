import React, { Component } from "react";

class ClassClick extends Component {
  clickclass() {
    console.log("Class Click");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickclass()}>ClassClick</button>
      </div>
    );
  }
}

export default ClassClick;
