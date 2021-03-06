import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/Queries';
import './home.css';

function Home() {
    const [citySearched, setCitySearched] = useState("")
    const [getWeather, { data, error}] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: { name: citySearched },
    })

    if (error) return <h1>Error found</h1>
    if (data) {
        console.log(data)
    }

  return (
    <div className="home">
        <h1>Search Weather Updates๐ก๐</h1>
        <p className="p">Welcome to our weather Updates๐กsearch engine</p>
        
        <input className="input" type="text" placeholder="You can Search from here............" onChange={(event) => {
            setCitySearched(event.target.value);
        }} 
        />
        <button className="button" onClick={() => getWeather()}>Search</button>
        <div className="weather">
            {data && (
                <>
                 <h1>City:๐ {data.getCityByName.name} </h1>
                 <h1>Country:๐ {data.getCityByName.country} </h1>
                 <h1>Temperature:๐ {data.getCityByName.weather.temperature.actual} </h1>
                 <h1>Cloud:๐ {data.getCityByName.weather.clouds.all}</h1>
                 <h1>Description:๐ {data.getCityByName.weather.summary.description} </h1>
                 <h1>Wind Speed:๐ {data.getCityByName.weather.wind.speed}</h1>
                 <h1>Timestamp:๐ {data.getCityByName.weather.timestamp}</h1>
                 </>
            )}
           
        </div>
    </div>
  )
}

export default Home;