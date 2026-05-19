//debouncing
import React, { useRef } from 'react'

const App = () => {
  let searchRef=useRef();

 function debounce(){   //use closure for id to be accessed only by callapi
  let id=null;
  return function callApi(){
    if(id){
      clearTimeout(id);
    }
    id=setTimeout(()=>{
      console.log("sending=="+searchRef.current.value)
    },2000)
  }
}
// let callApifn=debounce();
  return (
    <div>
      <input ref={searchRef} type="text" onChange={debounce()}/>
    </div>
  )
}


export default App