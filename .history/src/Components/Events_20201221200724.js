import React, {useState, useEffect} from 'react'
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
        <div className="container-fluid text-center ">
            <div>
                
            </div>
            <div className="card-body">
                <div className="card-header">
                {event.map((current) => (
                <h1 key={current.id}> Passage à {current.representations.village.name}, le {current.representations.release_date}</h1>
            ))}
                </div>
                <div className="card-text">
                {event.map((current) => (
                <h1 key={current.id}> Film 1 : {current.films.title}</h1>
            ))}
                </div>
            </div>
            
        </div>
    )
}
