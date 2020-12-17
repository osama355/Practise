import React,{Component} from 'react';
import Name from './Name';
import Message from './Message';

class App extends Component{
  render(){
    return( 
    <div>
      <h1>Class Component</h1>
      <Name name="osama" >
        <p>This is child component</p>
      </Name>
      <Name name="Ali" />

      <Message/>


    </div>
    )
  }
}
export default App;