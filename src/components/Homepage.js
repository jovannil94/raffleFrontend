import React from 'react';
import AllRafflesDisplay from '../helper/AllRafflesDisplay';
import CreateRaffle from '../helper/CreateRaffle';


const Homepage = () => {

    return (
        <div className="homeContainer">
            <h1>Homepage</h1>
            <div className="homeRaffles">
                <CreateRaffle/>
                <h2>All Raffles: </h2>
                <AllRafflesDisplay/>
            </div>
        </div>
    )
}

export default Homepage;