import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Films() {

    const [film, setFilm] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const url1 = await axios('http://localhost:8080/Film');
            setFilm(url1.data)
            console.log(film)
            // const url2 = await axios('http://localhost:9090/Agence/' + id);
            // setDataAgence(url2.data)
        }

        fetchData();
    }, []);

    return (
        <div>

            <div class="card border-primary mb-3" style={{width: 350}}>
                <div class="card-header">{film.map((current) => (
                    current.title
                    ))}</div>
                <div class="card-body text-primary">
                    <p class="card-text">{film.map((current) => (
                    current.description
                    ))}</p>
                    <p class="card-title">{film.map((current) => (
                    current.description
                    ))}</p>
                </div>
            </div>
            </div>
    )
}
