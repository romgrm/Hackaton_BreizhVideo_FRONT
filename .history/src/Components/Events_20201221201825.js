import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Events() {

    const [event, setEvent] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const url1 = await axios('http://localhost:8080/Preference');
            setEvent(url1.data)
            console.log(event)
        }

        fetchData();
    }, []);

    return (
        <div class="card text-center w-50 my-5 mx-auto">
            <div class="card-header">
                {event.map((current) => (
                    <h1 key={current.id}> Passage à {current.representations.village.name}, le {current.representations.release_date}</h1>
                ))}
            </div>
            <div class="card-body">
                <h5 class="card-title">Film 1 :&nbsp;
                {event.map((current) =>( 
                current.films.title
                         ))}</h5>
                <p class="card-text"> {event.map((current) =>( 
                current.films.description
                         ))}</p>
                <a href="#" class="btn btn-primary">Voter pour ce film</a>
            </div>
        </div>
        
    )
}
