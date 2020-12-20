import React, { Component } from "react";
import Name from "./Name";
import Message from "./Message";
import Counter from "./Counter";
import FunClick from "./FunClick";
import ClassClick from "./ClassClick";
import Binding from "./Binding";
import Parent from "./Parent";
import CondRendering from "./CondRendering";
import NameList from "./NameList";
import PersonList from "./PersonList";

class App extends Component {
  render() {
    return (
      <div>
        <NameList />
        <PersonList />
        {/* <CondRendering /> */}
        {/* <Parent /> */}
        {/* <Binding /> */}
        {/* <h1>Class Component</h1>
        <Name name="osama">
          <p>This is child component</p>
        </Name>
        <Name name="Ali" />
        <Message />
        <Counter />
        <FunClick />  function click
        <ClassClick /> class click */}
      </div>
    );
  }
}
export default App;
