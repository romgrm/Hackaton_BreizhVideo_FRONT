import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Events() {
    
    const [event, setEvent] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const url1 = await axios('http://localhost:8080/Representation');
            setEvent(url1.data)
            console.log(event)
        }

        fetchData();
    }, []);
    
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}