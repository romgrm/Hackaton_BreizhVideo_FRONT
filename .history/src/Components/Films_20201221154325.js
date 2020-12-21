import React, {useState, useEffect} from 'react'
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
           {film.map((current) => (
                          <h1>
                              
                          </h1> {current.id}   ))}
        </div>
    )
}
