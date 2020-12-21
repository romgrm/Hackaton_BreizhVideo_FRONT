import React from 'react'

export default function Events() {
    
    const [film, setFilm] = useState([]);
    const [display, setDisplay] = useState(false)

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
            <h1>hello</h1>
        </div>
    )
}
