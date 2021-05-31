import React, { useState, useEffect } from 'react';
import AllRafflesDisplay from '../helper/allRafflesDisplay';


const Homepage = () => {
    

    return (
        <div className="homeContainer">
            <h1>Homepage</h1>
            <div>
                <h2>All Raffles: </h2>
                <AllRafflesDisplay/>
            </div>
        </div>
    )
}

export default Homepage;