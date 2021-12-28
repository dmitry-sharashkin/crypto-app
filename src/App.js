import React from 'react'
import axios from "axios";

function App() {

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coin/1',
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': 'c4cb59fad1mshbf9a6aec398f84bp10882ejsnf417ab1af47d'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div className="App">
            <h1>Crypto</h1>
        </div>
    );
}

export default App;
