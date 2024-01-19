import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip; // destructuring advice property into advice variable

                setAdvice(advice);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button class="custom-btn btn-7" onClick={fetchAdvice}><span>GIVE ME ADVICE!</span></button>
            </div>
        </div>
    )
}

export default App;