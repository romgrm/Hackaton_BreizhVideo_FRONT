import React, {useState} from 'react'

export default function Films() {
    
    const [film, setFilm] = useState([]); 

    useEffect(() => {

        async function fetchData() {

            const url1 = await axios('http://localhost:8080/Film');
            setFilm(url1.data)
            console.log
            // const url2 = await axios('http://localhost:9090/Agence/' + id);
            // setDataAgence(url2.data)
        }

        fetchData();
    }, []);
    
    return (
        <div>
            <h1>You</h1>
        </div>
    )
}
