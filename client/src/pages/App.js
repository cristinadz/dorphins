import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Welcome from "./Welcome";
import Login from "./Login"
import Signup from "./Signup";
import Home from "./Home";
import Activity from "./Activity"
import NavBar from "../components/NavBar";

// PRIME REACT COMPONENTS 
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function App() {
  const [user, setUser] = useState(null)


  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

 
  // if (!user) return <Welcome setUser={setUser} />

  return (
    <div className="App">
      {/* <NavBar user={user} setUser={setUser} /> */}
      { !user ? null : <NavBar setUser={ setUser }/> }
      <Routes>
        <Route path='/' element={<Welcome setUser = {setUser} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/login' element= {<Login setUser = {setUser} />} />
        <Route path='/signup' element= {<Signup setUser = {setUser} />} />
      </Routes>
    </div>
  );
}

export default App;