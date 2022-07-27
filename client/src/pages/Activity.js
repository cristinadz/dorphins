import React, {useState, useEffect} from 'react'
import NewRunForm from '../components/NewRunForm'
import RunCard from '../components/RunCard';

function Activity({setUser, user}) {
  const [runs, setRuns] = useState([])

  useEffect(() => {
    fetch('/runs')
      .then((r) => r.json())
      .then(setRuns);
  }, []);

  const runCards = runs.map( run => (
    <RunCard key={run.id} run={run} />
  ))

  return (
    <div>

      {runCards}
      <NewRunForm user={user}/>
    </div>
  )
}

export default Activity