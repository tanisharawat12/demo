import './App.css';
import Home from './Home';
import ChatPage from "./ChatPage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState } from 'react';
import Login from "./Login";
import {auth} from "./firebase";
function App() {
  const[user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
 const signOut =()=>{
  auth.signOut()
  .then(()=>{
    setUser(null);
    localStorage.removeItem("user");
  })
  .catch((err) => alert(err.message));
 };
  return (
    <Router>
    <div className="App">
      {
        user?(
          <Routes> 
          <Route path='/' element={<Home currentUser={user} signOut={signOut}/>}/>
          <Route path='/:emailID' element={<ChatPage currentUser={user} signOut={signOut}/>}/>
          
          </Routes>) :
         ( <Login setUser={setUser}/> )
        
      }
   
    </div>
    </Router>
  );
}

export default App;
