import { Text } from '@chakra-ui/react'
import React from 'react'
import PlanCard from '../components/PlanCard'

function Plan({user, setUser, plans}) {

console.log(user.plan_id)

    const planCards = plans.map( (plan) => <PlanCard user={user} setUser={setUser} plan={plan} key={plan.id} />)
    const currentPlan = plans.find( plan => plan.id === user.plan_id)
    console.log(currentPlan)
  return (
    <>{user.plan_id ? <Text> current plan: {currentPlan.name} </Text> : null}
    
        {planCards}    
    </>
  )
}

export default Plan