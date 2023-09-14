import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Basic from './Basic';
import WithMaterialUI from './WithMaterialUI';
import Antd from './Antd';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = "http://localhost:3000/user";

  useEffect(() => {
    axios.get(apiUrl)
      .then(function (response) {
        // handle success
        for (var i = 0; i < response.data.length; i++) {
            setData(response.data[i].name);
            console.log(response.data[i].name);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  if(loading) {
    return <div><h1>Loading...</h1></div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      {/* <h1>Fetched Data</h1>
      <p>{data}</p>
      <Basic/>
      <WithMaterialUI/> */}
      <h1>React Tutorial!!!</h1>
      <Antd/>
    </>
  )
}

export default App
