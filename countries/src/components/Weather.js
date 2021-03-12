import React, { useState, useEffect } from 'react'
import axios from "axios"


const Weather = (props) => {
    const [weather, setWeather] = useState([])

    const params = {
        key: process.env.REACT_APP_API_KEY,
        q: props.capital
    }

    useEffect(() => {
        axios.get("http://api.weatherapi.com/v1/current.json", {params})
        .then(response => {
            setWeather(weather.concat(response.data));
        })
      }, [])

    return(
        <>
        <h2>Weather in {props.capital}</h2>
        {weather.map((res) => {
            return(
                <div key={res.location.country}>
                    <img src={res.current.condition.icon} alt="icon" style={{ height: '10%', width: '10%' }}/>
                    <p><b>Temperature: </b> {res.current.temp_c} Celcius</p>
                    <p><b>Wind: </b> {res.current.wind_kph} kph direction {res.current.wind_dir}</p>
                </div>
            )
        })}
        </>
    )
}


export default Weather;
