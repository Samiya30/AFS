import React from 'react'

function App() {
  let a=Math.random();
  let num1=10;
  let num2=5;
  return (
    <div>
      <Header></Header> 
      <h1>Hello World</h1>
      <h3>{a}</h3>
      <p>{num1+num2}</p>
      <Footer></Footer>
    </div>
  )
}


//component should start with capital letter
function Header(){
  return(
    <div>
      <div className="logo">Logo</div>
      <ul className="navLinks">
        <li className="navlist">Home</li>
        <li className="navlist">About</li>
        <li className="navlist">Contact</li>
      </ul>
    </div>
  )
}

function Footer(){
  return(
    <div>
      <p>Email:sam@gmail.com</p>
      <p>Phone:123456789</p>
    </div>
  )
}

export default App