import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/style.css';


const Tempapp = () =>
{
    let [city,setCity]=useState();
    let [search,setSearch]=useState('New delhi');
    let [humidity,setHumidity]=useState();


    useEffect(
         () => 
        {
        const fetchApi=async()=>{
            
            let r=await axios.get(`https://api.weatherapi.com/v1/current.json?key=e87ff57f979c4616a9b160742221106&q=${search}&aqi=no`)
            setCity(r.data.current.temp_c);
            setHumidity(r.data.current.humidity)
         }
         fetchApi();
        }
    )
       return (
        <>
     {/* {city===null ? ( <p> data not found</p>) :( */}
     <>
     <div className='rest'>
        <div className='box'>
            <div className='inputData'>
            <input type='search' className='inputField' value={search} onChange={(event)=>{
           setSearch(event.target.value)
            }}/>    
            </div>
        
        <div className='info'>
            <h1 className='temp'>{city} *C</h1>
            <h3 className='temp'> Humidity {humidity}</h3>
        </div>
        </div>
        </div>
        
     </>
        </>
    )
}
export default Tempapp;