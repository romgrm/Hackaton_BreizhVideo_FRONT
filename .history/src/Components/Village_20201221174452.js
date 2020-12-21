import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Village() {

    const [village, setVillage] = useState([])

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

    return (
        <div>
            <table className="table">
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
      <td>{film.map((current) => (
                        current.title
                    ))}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}
