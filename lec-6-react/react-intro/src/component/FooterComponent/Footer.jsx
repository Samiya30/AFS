import React from 'react'

const Footer = (props) => {
    console.log(props)
  return (
    <div>
      <h3>Footer</h3>
      <h4>{props.email}</h4>
    </div>
  )
}

export default Footer
