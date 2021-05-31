import React from 'react';
import AllRafflesDisplay from '../helper/AllRafflesDisplay';
import CreateRaffle from '../helper/CreateRaffle';


const Homepage = () => {

    return (
        <div className="homeContainer">
                <CreateRaffle/>
                <h2>All Raffles: </h2>
                <AllRafflesDisplay/>
        </div>
    )
}

export default Homepage;