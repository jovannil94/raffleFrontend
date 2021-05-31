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

    return(
        <div>
            Participants
        </div>
    )
}

export default Participants;