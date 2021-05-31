import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getAPI } from '../util/getAPI';
import { useInputs } from '../util/useInputs';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PickWinner = () => {
    const [winnerDetails, setWinnerDetails] = useState([]);
    const tokenContext = useInputs("");
    const API = getAPI();
    const { id } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let winner = await axios.patch(`${API}/raffles/${id}/winner`, {
                secret_token: tokenContext.value
            });
            setWinnerDetails(winner.data.payload);
        } catch (error) {
            console.log(error)
        }
    }
    console.log(winnerDetails)

    return (
        <div className="winnerContainer">
            {winnerDetails.length ?
                <div>
                    <h1>{winnerDetails.firstname}{winnerDetails.lastname}</h1>
                    <p>{winnerDetails.registered_at}</p>
                    <p>{winnerDetails.id}</p>
                    <p>{winnerDetails.email}</p>
                    <p>{winnerDetails.phone}</p>
                </div>
            : 
            <div className="noWinner">
                <h1>Pick a Winner</h1>
                <form className="winnerForm" onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" color='secondary' label="Secret Token" variant="outlined" autoFocus required {...tokenContext}/>
                    <Button variant="contained" color='secondary' type="submit">Submit</Button>
                </form>
                <div className="winnerTokenContext">
                    <h2>Secret Token</h2>
                    <p>The secret token used when creating the raffle must be provided.</p>
                </div>
            </div>
            }
        </div>
    )
}

export default PickWinner;