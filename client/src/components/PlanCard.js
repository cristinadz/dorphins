import { Button, Text } from '@chakra-ui/react'
import React from 'react'

function PlanCard({user, plan, setUser }) {

    function handleAddPlan(e){

        let planId = e.target.value
        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ plan_id: planId }),
          })
            .then((r) => r.json())
            .then((updatedUser) => {

              setUser(updatedUser);
            });
    }
  return (
    <div>
        <Text>{plan.name}</Text>
        <Text>{plan.number_of_runs}</Text>
        <Button value={plan.id} onClick={handleAddPlan}> pick plan </Button>

    </div>
  )
}

export default PlanCard