import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from "./components/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51MMRdbHugCruEOairg5y1nAmPhkurema3KqnmZ5ekZFkA7StznM1mJb7h05oxLyaGsKwzwAoGIPBbxKUo8iskCqT00A8FX2Wi4'
);

function App() {
  const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
  return (
    <div className="App">
      
        <Routes> 
          <Route path="/" element={<><Header/><Home/></>}/>
          <Route path='/Checkout' element={<><Header/><Checkout/></>} />  
          <Route path='/orders' element={<><Header/><Orders /></>} />  
          <Route path='/Login' element={<Login/>} />  
          <Route path='/Payment' element={<><Header/>
		  <Elements stripe={promise}><Payment/></Elements></>} />  
        </Routes>
      
    </div>
);
}

export default App;
