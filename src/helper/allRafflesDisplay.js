import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getAPI } from '../util/getAPI';
import axios from 'axios';
import '../css/AllRafflesDisplay.css';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import TextField from '@material-ui/core/TextField';
import { useInputs } from "../util/useInputs";

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
      width: 20,
      height: 20,
    },
  }));

const AllRafflesDisplay = ({ submitted }) => {
    const [allRaffles, setAllRaffles] = useState([]);
    const [filteredArray, setFilteredArray] = useState([]);
    const classes = useStyles();
    const history = useHistory();
    const searchInput = useInputs("");

    
    useEffect(() => {
        const API = getAPI();
        const fetchRaffles = async () => {
            try {
                let res = await axios.get(`${API}/raffles`);
                setAllRaffles(res.data.payload);
                setFilteredArray(res.data.payload);
            } catch (error) {
                console.log(error);
            }
        }
        fetchRaffles();
    }, [submitted]);

    const handleRedirect = (e, id) => {
        e.preventDefault();
        history.push({
            pathname: `raffle/${id}`
        });
    }
    
    const displayRaffles = filteredArray.map((raffle) => (
        <div className="singleRaffleDetail" key={raffle.id} onClick={((e) => {handleRedirect(e, raffle.id)})}>
            <h2>{raffle.name}</h2>
            <div className="iconLine">
                <AddBoxOutlinedIcon className={classes.icon}/>
                <p>Created on: {raffle.created_at}</p>
            </div>
            {raffle.winner_id ?
                <div className="iconLine">
                    <EmojiPeopleOutlinedIcon className={classes.icon}/>
                    <p>Winner Id: {raffle.winner_id}</p>
                </div>
                : 
                <div className="iconLine">
                    <EmojiPeopleOutlinedIcon className={classes.icon}/>
                    <p>Winner Id: No winner yet</p>
                </div>
            }    
            {raffle.raffled_at ?
                <div className="iconLine">
                    <EventAvailableOutlinedIcon className={classes.icon}/>
                    <p>Raffled on: {raffle.raffled_at}</p>
                </div>
                : 
                <div className="iconLine">
                    <EventAvailableOutlinedIcon className={classes.icon}/>
                    <p>Not raffled yet</p>
                </div>
            }
        </div>
    ))

    const handleChange = (e) => {
        e.preventDefault();
        let filteredRaffles = allRaffles.filter(raffle => {
            return raffle.name.includes(searchInput.value);
        })
        setFilteredArray(filteredRaffles);
    }

    return (
        <div className="displayContainer">
        <form onChange={handleChange}>
            <TextField id="outlined-basic" color='secondary' label="Search By Raffle Name" variant="outlined" fullWidth={true} autoFocus required {...searchInput}/>
        </form>
            <div className="rafflesDisplay">
                {displayRaffles}
            </div>
        </div>
    )
}

export default AllRafflesDisplay;