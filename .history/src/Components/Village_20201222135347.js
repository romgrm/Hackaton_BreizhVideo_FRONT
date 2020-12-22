import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Village() {

    const id = 1;
    const [village, setVillage] = useState([]);
    const [suppr, setSuppr] = useState(id)


    // POST _ Créer un village

    useEffect(() => {
        async function postData() {

            const villageData = { id: 2, name: 'Nantes', postCode: '44000' };
            const postVillage = await axios.post('http://localhost:8080/Village', village)
                .then(response => setVillage(response.data));
        }

        postData();
    }, []);


    // GET _ Récupérer les villages 
    useEffect(() => {

        async function fetchData() {

            const url1 = await axios('http://localhost:8080/Village');
            setVillage(url1.data)
            console.log(village)
        }

        fetchData();
    }, []);




    // deleteData = (id, event) => {
    //     const url2 = axios.delete(`http://localhost:8080/Village/${id}`)
    //     setSuppr(url2)
    // }

    return (
        <div>
            <div>

                {village.map((current, id) => {

                    return current.id === 1 ?
                        <h1>{current.name}</h1>
                        : null

                })}
            </div>
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
                        <td>
                            {village.map((current, id) => {

                                return current.id === 1 ?
                                    <h1>{current.name}</h1>
                                    : null

                            })}
                        </td>
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
