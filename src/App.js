
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {default as ICON} from "./assets/icon.png";
import { useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [inputCity,setInputCity]=useState("");
  const apiKey="eaf612e52f8c4c2b4912f13628198057"
  const [data,setData]=useState({})
  const getWeatherDeatils=(cityName)=>{
    if(!cityName) return
    const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey
      axios.get(apiURL).then((res)=>{
        console.log("response",res.data)
        setData(res.data)
      }).catch((err)=>{
        console.log("err",err)
      })
  }
  const handleChangeInput=(e)=>{
    setInputCity(e.target.value)
  }
  const handleSearch=()=>{
    getWeatherDeatils(inputCity)
  }

  useEffect(()=>{
    getWeatherDeatils("delhi")
  },[])
  


  return (
    
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Wheather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control" onChange={handleChangeInput} value={inputCity}/>
        <button className="btn btn-primary" type="button"
        onClick={handleSearch}
        >Search</button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow round weatherResultBox">
          <img className="weatherIcon"
          src={ICON} alt="weatherIcon"/>
          <h5 className="weatherCity">{data?.name}</h5>
          <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        </div>
      </div> 
    </div>
    
  );
}

export default App;
