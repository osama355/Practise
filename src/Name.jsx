import React from 'react';

const Name=(props)=>{
  console.log(props)
  console.log(props.name)
  return(
    <>
      <h1>Hello {props.name}</h1>
      {props.children}
    </>

  )
}
 
export default Name;