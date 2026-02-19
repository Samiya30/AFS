import React, { useEffect, useState } from 'react'

const App = () => {
  let [count,setCount]=useState(0);
  let [random,setRandom]=useState(0);
  function fetchTodo(){
    //code to fetch data
    console.log("data fetched...")
  }
  
  function changeCount(){
    setCount(count+1);
  }

  //updating phase
  function runOnCountChange(){
    //some work related to count variables
    console.log("count change function run")
  }

  function changeRandom(){
    setRandom(Math.random())
  }

  //fetchTodo(); //cannot directly call

  //mounting phase work
  useEffect(()=>{
    fetchTodo();

    let id=setInterval(()=>{
      console.log("running setInterval")
    },1000)

    //clean up function--->it runs only on unmounting phase
    return ()=>{
      clearInterval(id);
    }

  },[]) //if not passed any array then it work at every re render---->not good


  useEffect(()=>{
    runOnCountChange()
  },[count,random]) //anyone also changes then also useeffect works

  useEffect(()=>{

  })

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={changeCount}>click</button>
      <button onClick={changeRandom}>random</button>
      <h4>{count}</h4>
      <h3>{random}</h3>
      <h3></h3>
    </div>
  )
}

export default App
