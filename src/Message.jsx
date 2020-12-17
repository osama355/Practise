import React, {Component} from 'react';

class Message extends Component{
  constructor(){
    super()
    this.state={
      message:"Welcome"
    }
  }

  Change(){
    this.setState({
      message:"Good Luck !"
    })
  }

  render(){
    return(
      <div>
      <h1> {this.state.message} </h1>
      <button onClick={()=>this.Change()} >Change</button>
      </div>
    )
  }
}
export default Message;