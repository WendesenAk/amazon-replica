import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from "./components/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

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
          <Route path='/Login' element={<Login/>} />  
        </Routes>
      
    </div>
  );
}

export default App;
