import React from 'react'
import Header from './component/headerComponent/Header'
import Footer from './component/FooterComponent/Footer'
import { sum } from './component/headerComponent/Header'  //curly braces for named exports
import { multiply } from './component/headerComponent/Header'

const App = () => {
  //sum(2,5)--->error can not import
  let ans=sum(2,6)
  return (
    <div>
      <Header ans={ans} name="Samiya"></Header>
      <Footer email="sam@gmail.com"></Footer>
      {/* <p>{ans}</p> */}
    </div>
  )
}

export default App