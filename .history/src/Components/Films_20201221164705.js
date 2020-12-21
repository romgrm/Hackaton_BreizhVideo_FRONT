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
        <div className="container">
            <div className="row">
                <div className=" card border-primary mb-3 mx-5" style={{ width: 500 }}>
                    <div className="card-header">{film.map((current) => (
                        current.title
                    ))}</div>
                    <div className="card-body text-primary">
                        <p className="card-title">{film.map((current, index) => (
                            current.releaseYear
                        ))}</p>
                        <p className="card-text">{film.map((current) => (
                            current.description
                        ))}</p>
                    </div>
                </div>
                <div className="card border-primary mb-3 mx-5" style={{ width: 500 }}>
                    <div className="card-header">{film.map((current) => (
                        current.title
                    ))}</div>
                    <div className="card-body text-primary">
                        <p className="card-title">{film.map((current, index) => (
                            current.releaseYear
                        ))}</p>
                        <p className="card-text">{film.map((current) => (
                            current.description
                        ))}</p>
                    </div>
                </div>
                <div className="card border-primary mb-3 mx-5" style={{ width: 500 }}>
                    <div className="card-header">{film.map((current) => (
                        current.title
                    ))}</div>
                    <div className="card-body text-primary">
                        <p className="card-title">{film.map((current, index) => (
                            current.releaseYear
                        ))}</p>
                        <p className="card-text">{film.map((current) => (
                            current.description
                        ))}</p>
                    </div>
                </div>
                <div className="card border-primary mb-3 mx-5" style={{ width: 500 }}>
                    <div className="card-header">{film.map((current) => (
                        current.title
                    ))}</div>
                    <div className="card-body text-primary">
                        <p className="card-title">{film.map((current, index) => (
                            current.releaseYear
                        ))}</p>
                        <p className="card-text">{film.map((current) => (
                            current.description
                        ))}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
