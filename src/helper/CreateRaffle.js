import React from 'react';
import { getAPI } from '../util/getAPI';
import axios from 'axios';
import { useInputs } from '../util/useInputs';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const CreateRaffle = () => {
    const nameContext = useInputs("");
    const tokenContext = useInputs("");
    const API = getAPI();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API}/raffles`, {
               name: nameContext.value,
               secret_token: tokenContext.value
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="createForm" onSubmit={handleSubmit}>
            <h1>New Raffle:</h1>
            <TextField id="outlined-basic" color='secondary' label="Raffle Name" variant="outlined" autoFocus required {...nameContext}/>
            <TextField id="outlined-basic" color='secondary' label="Raffle Secret Token" variant="outlined" autoFocus required {...tokenContext}/>
            <p>You must remember the Raffle Token because it will be asked when picking a winner</p>
            <Button variant="contained" color='secondary' type="submit">Create New Raffle</Button>
        </form>
    )
}

export default CreateRaffle;