import React, { useState, useEffect } from 'react';
import { getAPI } from '../util/getAPI';
import axios from 'axios';

const Homepage = () => {
    const [allRaffles, setAllRaffles] = useState([]);
    
    const displayRaffles = allRaffles.map((raffle) => (
        <div key={raffle.id}>
            <h1>{raffle.name}</h1>
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

    return (
        <div className="homeContainer">
            <h1>Homepage</h1>
            <div>
                <h2>All Raffles</h2>
                {displayRaffles}
            </div>
        </div>
    )
}

export default Homepage;