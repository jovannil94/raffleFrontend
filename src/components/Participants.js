import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getAPI } from '../util/getAPI';
const API = getAPI();

const Participants = () => {
    const [allParticipants, setAllParticipants] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchPartipants = async () => {
            try {
                let participants = await axios.get(`${API}/raffles/${id}/participants`);
                setAllParticipants(participants.data.payload);
            } catch (error) {
                console.log(error)
            }
        }

        fetchPartipants();
    }, [])
    
    const count = (arr) => {
        let total = 0;
        for(let i = 0; i < arr.length; i ++) {
            total ++;
        }
        return total
    }
    let total = count(allParticipants);

    const printAll = allParticipants.map((user) => (
        <div className="participantDetails" key={user.id}>
            <p>{user.firstname} {user.lastname}</p>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    ))

    return(
        <div className="participantsContainer">
            <p>Participants: {total} total</p>
            {printAll}
        </div>
    )
}

export default Participants;