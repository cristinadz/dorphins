import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Welcome from "./Welcome";
import Login from "./Login"
import Signup from "./Signup";
import Home from "./Home";
import Activity from "./Activity"
import NavBar from "../components/NavBar";
import NewRunForm from "../components/NewRunForm";
import EditRunForm from "../components/EditRunForm";
import RunDetails from "./RunDetails";

function App() {
  const [user, setUser] = useState(null)
  const [runs, setRuns] = useState([])


  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/runs')
      .then((r) => r.json())
      .then(setRuns);
  }, []);

  function addNewRun(newRun){
    setRuns( runs => [...runs, newRun])
  }
 
  function deleteRun(id){
    const updatedRuns = runs.filter( run => run.id !== id)
    setRuns(updatedRuns)
  }
  // if (!user) return <Welcome setUser={setUser} />

  return (
    <div className="App">

      { !user ? null : <NavBar setUser={ setUser }/> }

      <Routes>
        <Route path='/' element={<Welcome setUser = {setUser} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/activity' element={<Activity user = {user} setUser = {setUser} runs={runs} />} />
        <Route path='/login' element= {<Login setUser = {setUser} />} />
        <Route path='/signup' element= {<Signup setUser = {setUser} />} />
        <Route path='/addrun' element= {<NewRunForm user={user} addNewRun={addNewRun} />} />
        <Route path='/edit_run' element= {<EditRunForm user={user} />} />
        <Route path='/runs/:id' element= {<RunDetails deleteRun={deleteRun} />} />
      </Routes>
      
    </div>
  );
}

export default App;