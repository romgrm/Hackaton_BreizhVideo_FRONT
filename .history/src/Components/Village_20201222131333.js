import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Village() {

    const id = 1;
    const [village, setVillage] = useState([]);
    const [suppr, setSuppr] = useState(id)

    // GET _ Récupérer les villages 
    useEffect(() => {

        async function fetchData() {

            const url1 = await axios('http://localhost:8080/Village');
            setVillage(url1.data)
            console.log(village)
            // const url2 = await axios('http://localhost:9090/Agence/' + id);
            // setDataAgence(url2.data)
        }

        fetchData();
    }, []);

    // POST _ Créer un village
    
    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const village = { title: 'React Hooks POST Request Example' };
        axios.post('https://reqres.in/api/articles', village)
            .then(response => setArticleId(response.data.id));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    // deleteData = (id, event) => {
    //     const url2 = axios.delete(`http://localhost:8080/Village/${id}`)
    //     setSuppr(url2)
    // }

    return (
        <div>
            <table className="table w-75">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom du Village</th>
                        <th scope="col">Code Postal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{village.map((current) => (
                            current.name
                        ))}</td>
                        <td>{village.map((current) => (
                            current.postCode
                            ))}</td>
                            {/* < i onClick = {(event) => {deleteData(event.target.value)}} style={{ cursor: 'pointer', color: '#18A2B8' }} className="fas fa-trash fa-lg ml-5"></i> */}
                    </tr>
                {/* <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
                </tbody>
            </table>
        </div >
    )
}
