import React from 'react'
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise=loadStripe('pk_test_51NrdUYSJyfB44uqMsbnqrEe8aj7AedEZpsIYgZPgrPY396EqFBY53m3Qw3JXW6bFHb5HsKK1Wsb82GfR2wwpknWV00sQcZXNHN')
function Abc() {
  return (
    <div>
        
      <Elements stripe={promise}/>
          
          
       
    </div>
  )
}

export default Abc
