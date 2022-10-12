import React from 'react'

function Button(props) {
  return (
    <div className='btn'
    style={props.style} >
       <span style={{fontSize:12}}> {props.content}</span>
    </div>
  )
}

export default Button