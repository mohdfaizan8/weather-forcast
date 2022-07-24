import React, { useEffect, useState } from 'react'
import "./index.css";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=7a2df68ffbbaf441d241d7efe0289359

const App = () => {
  const [city, setCity]= useState(null)
  const [search, setSearch] = useState(city)

  useEffect(()=>{
    const fetchApi = async()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7a2df68ffbbaf441d241d7efe0289359`
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main)

    };
    fetchApi();
  },[search])
  
  return (
    <>
    
    <div className="container">
      <div className="inner">
    <p className='name'> Weather API  ✨</p>
      <input type="search" placeholder="✍ search for city"  className='search-bar' onChange={(event)=>setSearch(event.target.value)} />
      <div className="other">
        <p className='city'>{search}</p>
       
        { !city ? (
          <p className='nodata'> No Data found</p>

        ):
        (
          
          <p className='min'>Min : {city.temp_min} °C and Max : {city.temp_max} °C </p>
        )
        }
        
      </div>
      </div>

    </div>
    
    </>
  )
}

export default App