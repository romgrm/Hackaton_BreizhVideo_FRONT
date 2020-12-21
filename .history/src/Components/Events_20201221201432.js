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
        <div class="card">
            <div class="card-header">
                {event.map((current) => (
                    <h1 key={current.id}> Passage à {current.representations.village.name}, le {current.representations.release_date}</h1>
                ))}
            </div>
            <div class="card-body">
                <h5 class="card-title">Film 1 : 
                {event.map((current) =>() 
                current.films.title
                         ))}</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        // <div className="container-fluid text-center ">
        //     <div className="card border-primary">

        //         <div className="card-body">
        //             <div className="card-header">
        //                 {event.map((current) => (
        //                     <h1 key={current.id}> Passage à {current.representations.village.name}, le {current.representations.release_date}</h1>
        //                 ))}
        //             </div>
        //             <div className="card-text">
        //                 {event.map((current) => (
        //                     <p key={current.id}> Film 1 : {current.films.title}</p>
        //                 ))}
        //             </div>
        //         </div>

        //     </div>
        // </div>
    )
}
