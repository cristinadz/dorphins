import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import DurationPicker from 'react-duration-picker'
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';



function NewRunForm({user}) {
  const [miles, setMiles] = useState(null)
  const [totalTime, setTotalTime] = useState(null)
  const [date, setDate] = useState(null)
  const [rating, setRating] = useState(null)
  const navigate = useNavigate();


  function onChangeTime(e){
    let totalMin = (e.hours * 60) + e.minutes
    setTotalTime(totalMin)
  }
 
  function handleSubmit(e){
    e.preventDefault();

    fetch('/runs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        miles: miles,
        total_time: totalTime,
        user_id: user.id,
        date,
      }),
    })
      .then(navigate('/home'));
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <InputNumber 
        placeholder="0 mi" 
        value={miles} 
        onChange={(e) => setMiles(e.value)} 
        suffix=" mi"
        mode='decimal'
        minFractionDigits={2} 
        maxFractionDigits={2}
        />

        <DurationPicker 
        onChange={e => onChangeTime(e)} 
        initialDuration={{ hours: 1, minutes: 2, seconds: 3 }} 
        />

        <Calendar 
        value={date} 
        name="date" 
        onChange={(e) => setDate(e.value)} 
        showIcon 
        showButtonBar 
        />

        <Rating value={rating} cancel={false} onChange={(e) => setRating(e.value)} />
        <Button type='submit'> save </Button>
      </form>
    </div>
  )
}

export default NewRunForm

