import React, { useState, useEffect } from 'react';
import { getAPI } from '../util/getAPI';
import axios from 'axios';

const AllRafflesDisplay = () => {
    const [allRaffles, setAllRaffles] = useState([]);
    
    useEffect(() => {
        const API = getAPI();
        const fetchRaffles = async () => {
            try {
                let res = await axios.get(`${API}/raffles`);
                setAllRaffles(res.data.payload);
            } catch (error) {
                console.log(error);
            }
        }
        fetchRaffles();
    }, []);

    const displayRaffles = allRaffles.map((raffle) => (
        <div key={raffle.id}>
            <h2>{raffle.name}</h2>
            <p>Created on: {raffle.created_at}</p>
            {raffle.winner_id ?
                <p>Winner Id: {raffle.winner_id}</p>
                : <p>Winner Id: No winner yet</p>
            }
            {raffle.raffled_at ?
                <p>Raffled on: {raffle.raffled_at}</p>
                : <p>Not raffled yet</p>
            }
        </div>
    ))
    return (
        <div className="rafflesDisplay">
            {displayRaffles}
        </div>
    )
}

export default AllRafflesDisplay;