import React from 'react'

export const ErrorMessage = (props) => {
  return (
    <span
        style={{ backgroundColor:'#D43241', color: 'white', fontWeight:'bolder', padding:"4px", textAlign:'center', marginTop:'7px', borderRadius:'4px' }}
    >{props.children}</span>
  )
}
