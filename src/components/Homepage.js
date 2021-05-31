import React from 'react';
import AllRafflesDisplay from '../helper/AllRafflesDisplay';
import CreateRaffle from '../helper/CreateRaffle';
import '../css/Homepage.css';

const Homepage = () => {

    return (
        <div className="homeContainer">
            <div className="homeCreate">
                <h1>Raffle App</h1>
                <CreateRaffle/>
            </div>
            <div className="homeRaffles">
                <h2>All Raffles: </h2>
                <AllRafflesDisplay/>
            </div>
        </div>
    )
}

export default Homepage;