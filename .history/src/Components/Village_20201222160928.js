import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {v1 as uuid} from 'uuid'

export default function Village() {

    const initialState = {
        name: " ",
        postCode: " ",
    }
    
    const [village, setVillage] = useState([]);
    const [create, setCreate] = useState(initialState);
    
    // Watch sur les inputs 
    const handleInputChange = event => {
        const { name, value } = event.target;
        setCreate({ ...create, [name]: value });
        console.log(create)
    };

    // Envoie des données au click du button
    const addItem = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/Village', create)
        var data = {
            id: uuid(),
            name: create.name,
            postCode: create.postCode
        };
        setCreate(data)
        console.log(data)
        
    }

        // POST _ Créer un village

        // useEffect(() => {
        //     async function postData() {

        //         const villageData = { id: 2, name: 'Nantes', postCode: '44000' };
        //         const postVillage = await axios.post('http://localhost:8080/Village', village)
        //             .then(response => setVillage(response.data));
        //     }

        //     postData();
        // }, []);


        //GET _ Récupérer les villages 
        useEffect(() => {

            async function fetchData() {

                const url1 = await axios('http://localhost:8080/Village');
                setVillage(url1.data)
                console.log(village)
            }

            fetchData();
        }, []);

        // // DELETE _ Supprimer village
        // const handleDelete = (event) => {
        //     event.preventDefault()
        //     axios.delete(`http://localhost:8080/Village/${id}`)
        //     console.log(village)
        // };


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
                            <td>
                                {village.map((current, id) => {

                                    return current.id === 1 ?
                                        <>{current.name}</>
                                        : null

                                })}
                            </td>
                            <td>
                                {village.map((current, id) => {

                                    return current.id === 1 ?
                                        <>{current.postCode}</>
                                        : null

                                })}
                            </td>
                            {/* < i onClick={(event) => handleDelete(current.id, event)} style={{ cursor: 'pointer', color: '#18A2B8' }} className="fas fa-trash fa-lg ml-5"></i> */}
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>
                                {village.map((current, id) => {

                                    return current.id === 45 ?
                                        <>{current.name}</>
                                        : null

                                })}
                            </td>
                            <td>
                                {village.map((current, id) => {

                                    return current.id === 45 ?
                                        <>{current.postCode}</>
                                        : null

                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nom du village</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={create.name} onChange={handleInputChange} name="name"  />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Code postal</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" value={create.postCode} onChange={handleInputChange} name="postCode" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={addItem}>Submit</button>
                </form>
            </div >
        )
}
    

