import React from 'react'

// or u can use && operator to check the condition and return the jsx element accordingly..
/* or u can directly use ternary operator in jsx to check the condition and return the jsx element accordingly.. */
//u cannot use if else statement in jsx but u can use ternary operator or u can use function to check the condition and return the jsx element accordingly..

function App  () {
  let age = 19;
  // first way to check the condition and return the jsx element accordingly is to use function and call that function in jsx..

  function checkVotingEligibility(age){
    if(age>=18){
      return <h1>Allowed to vote</h1>
    } else{              
      return <h1>Not Allowed to vote</h1> 
    }
  }

  return (
    // second way to check the condition and return the jsx element accordingly is to use ternary operator in jsx..
    <div>
      
   {
    checkVotingEligibility(age)
   }
   
   {/* {
    age >= 18 
        ? <h1>Allowed to vote</h1> 
        : <h1>Not Allowed to vote</h1>
   } */}
  
   {/* {
    age >= 18 && <h1>Allowed to vote</h1>
   }
   {
    age < 18 && <h1>Not Allowed to vote</h1>
   } */}

    </div>
    // u can also use && operator to check the condition and return the jsx element accordingly.. if the condition is true then it will return the jsx element otherwise it will return false and nothing will be rendered in the UI..
  )
}

export default App