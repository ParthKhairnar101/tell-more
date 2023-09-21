import React,{ useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements ,stripeApiKey} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise=loadStripe('pk_test_51NrdUYSJyfB44uqMsbnqrEe8aj7AedEZpsIYgZPgrPY396EqFBY53m3Qw3JXW6bFHb5HsKK1Wsb82GfR2wwpknWV00sQcZXNHN')
function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>>',authUser);

      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          USER:null
        })
      }
    })
  },[])
    //BEM CONVENTION
    //make sure default route(home route) is at bottom
    return(
    <Router>
    <div className="app">
      
      <Routes>
        <Route path="/orders" element={<><Header/><Orders/></>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/checkout" element={<><Header/><Checkout/></>} />
        {stripeApiKey && (
        <Route 
        path="/payment"
        element={(
           <Elements stripe={promise}>
        
          <Payment/>
        
      </Elements>
      )}
      />
      )}
      <Route path="/" element={<><Header/><Home/></>}  />
      
        
      </Routes>
      </div>
       
    </Router>
    
  );
}

export default App;
