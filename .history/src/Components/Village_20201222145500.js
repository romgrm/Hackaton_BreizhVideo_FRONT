import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Village() {

    // const AddVillage = () => {
    //     const initialState = {
    //         id: 3,
    //         title: "",
    //         postCode: "",
    //     };

        const [village, setVillage] = useState([]);
        // const [addVillage, setAddVillage] = useState(initialState);

        const handleInputChange = event => {
            const { name, value } = event.target;
            setTutorial({ ...addVillage, [name]: value });
          };

        // POST _ Créer un village

        // useEffect(() => {
        //     async function postData() {

        //         const villageData = { id: 2, name: 'Nantes', postCode: '44000' };
        //         const postVillage = await axios.post('http://localhost:8080/Village', village)
        //             .then(response => setVillage(response.data));
        //     }

        //     postData();
        // }, []);
        
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

        // // DELETE _ Supprimer village
        // const handleDelete = (event) => {
        //     event.preventDefault()
        //     axios.delete(`http://localhost:8080/Village/${id}`)
        //     console.log(village)
        // };
        

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

                                    return current.id === 2 ?
                                        <>{current.name}</>
                                        : null

                                })}
                            </td>
                            <td>
                                {village.map((current, id) => {

                                    return current.id === 2 ?
                                        <>{current.postCode}</>
                                        : null

                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div >
        )
}

