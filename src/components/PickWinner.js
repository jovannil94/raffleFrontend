import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAPI } from '../util/getAPI';
import { useInputs } from '../util/useInputs';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PickWinner = () => {
    const tokenContext = useInputs("");

    return (
        <div className="winnerContainer">
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
    )
}

export default PickWinner;