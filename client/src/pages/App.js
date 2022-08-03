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
import EventPage from "./EventPage";
import { ViewIcon } from "@chakra-ui/icons";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

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
  }, [user]); 

  function addNewRun(newRun){
    setRuns( runs => [...runs, newRun])
  }
 
  function deleteRun(id){
    const updatedRuns = runs.filter( run => run.id !== id)
    setRuns(updatedRuns)
  }

 
  return (
    <div className="App">

      { !user ? null : <NavBar setUser={ setUser } /> }

      <Routes>
        <Route path='/' element={<Welcome setUser = {setUser} user={user} />} />
        <Route path='/home' element={<Home user={user} />} />
        <Route path='/activity' element={<Activity user = {user} setUser = {setUser} runs={runs} />} />
        <Route path='/events' element= {<EventPage />} />
        <Route path='/login' element= {<Login setUser = {setUser} />} />
        <Route path='/signup' element= {<Signup setUser = {setUser} />} />
        <Route path='/addrun' element= {<NewRunForm user={user} addNewRun={addNewRun} />} />
        {/* <Route path='/edit_run' element= {<EditRunForm user={user} />} /> */}
        <Route path='/runs/:id' element= {<RunDetails deleteRun={deleteRun} user = {user} />} />
        <Route path='/profile' element= {<ViewProfile user = {user} runs={runs} />} />
        <Route path='/edit_profile' element= {<EditProfile user = {user} setUser = {setUser} />} />

      </Routes>
      
    </div>
  );
}

export default App;