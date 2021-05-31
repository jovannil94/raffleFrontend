import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAPI } from '../util/getAPI';
import { useInputs } from '../util/useInputs';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Register = () => {
    const [allRaffles, setAllRaffles] = useState([]);
    const [chosenRaffle, setChosenRaffle] = useState("");
    const firstNameContext = useInputs("");
    const lastNameContext = useInputs("");
    const emailContext = useInputs("");
    const phoneContext = useInputs("");
    const API = getAPI();

    useEffect(() => {
        const fetchRaffles = async () => {
            try {
                let res = await axios.get(`${API}/raffles`);
                setAllRaffles(res.data.payload);
            } catch (error) {
                console.log(error);
            }
        }
        fetchRaffles();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API}/raffles/${chosenRaffle}/participants`, {
               firstname: firstNameContext.value,
               lastname: lastNameContext.value,
               email: emailContext.value,
               phone: phoneContext.value
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        setChosenRaffle(e.target.value);
    }

    return(
        <div className="registerContainer">
            <h1>Register to participate in the raffle:</h1>
            <label>Select a raffle to enter</label>
            <select onChange={handleChange}>
            <option hidden>Select raffle</option>
                {allRaffles.map((raffle) => 
                <option key={raffle.id} value={raffle.id}>{raffle.name}</option>
                )}
            </select>
            <form className="registerUser" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" color='secondary' label="First Name" variant="outlined" autoFocus required {...firstNameContext}/>
                <TextField id="outlined-basic" color='secondary' label="Last Name" variant="outlined" autoFocus required {...lastNameContext}/>
                <TextField id="outlined-basic" color='secondary' label="Email" variant="outlined" autoFocus required {...emailContext}/>
                <TextField id="outlined-basic" color='secondary' label="Phone (optional)" variant="outlined" autoFocus {...phoneContext}/>
                <Button variant="contained" color='secondary' type="submit">Submit</Button>
                {/* <Button variant="contained" color='secondary' type="reset">Reset</Button> */}
            </form>
        </div>
    )
}

export default Register;