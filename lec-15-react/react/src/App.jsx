import React from 'react'
import {Routes,BrowserRouter,Route,Link, useParams} from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <Home></Home>
      <About></About>
      <Contact></Contact> */}

        
        <header>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Profile/:name' element={<Profile></Profile>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>    
        {/* use * for all other routes that are not defined */}
      </Routes>
      
        
    </div>
  )
}

function Home(){
  return(
    <div>
      <h1>this is home page</h1>
    </div>
  )
}
function About(){
  return(
    <div>
      <h1>this is about page</h1>
    </div>
  )
}
function Contact(){
  return(
    <div>
      <h1>this is contact page</h1>
    </div>
  )
}
function Profile(){
  let {name}=useParams();
  return(
    <div>
      <h1>Profile page of {name}</h1>
    </div>
  )
}
function PageNotFound(){
  return(
    <div>
      <h1>page not found</h1>
    </div>
  )
}
export default App