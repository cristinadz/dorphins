import { IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";

function RunDetails({deleteRun}) {
	const [run, setRun] = useState([]);
    const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		fetch(`/runs/${id}`).then((r) => {
			r.json().then((run) => {
				setRun(run);
				console.log(run);
			});
		});
	}, []);

    function handleDeleteRun(id) {
        fetch(`/runs/${id}`, {
          method: 'DELETE',
          headers: { Accept: 'application/json' },
        }).then((r) => {
          if (r.ok) {
            deleteRun(run.id)
          }
        }).then(navigate('/activity'))
      }

	return (
		<div>
			{run.miles}

			<IconButton 
                as={Link} to="/edit_run"
				variant="unstyled"
				icon={<EditIcon />}
			/>
			<IconButton onClick={()=> handleDeleteRun(run.id)} variant="unstyled" icon={<DeleteIcon />} />
		</div>
	);
}

export default RunDetails;
