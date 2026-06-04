import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Searchbox(){

    let [ city, setcity]= useState("")

    const API_URL ="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY ="22abcad22963af50e0190fb51fceafb3"



let weathercall = async()=>{
     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
     let jsonresponse = await response.json();
    //  console.log(jsonresponse)

     if (jsonresponse.cod != 200) {
        alert("City not found or API issue");
        return;
    }

    let result = {
        city: city,
        temp: jsonresponse.main.temp,
        humidity: jsonresponse.main.humidity,
        pressure: jsonresponse.main.pressure,
        windspeed: jsonresponse.wind.speed,
        description: jsonresponse.weather[0].description,
        temp_min: jsonresponse.main.temp_min,
        temp_max: jsonresponse.main.temp_max,
        feels_like: jsonresponse.main.feels_like,

    }
    console.log(result)

}






let handchange =(event)=>{
    setcity(event.target.value)
}

let sumbithand=(event)=>{
    event.preventDefault()
    console.log(city)
    setcity("")
    weathercall()


    
}



    return(
        <div>
            <h1>search the weather</h1>
            <form onSubmit={sumbithand}>
                <TextField id="standard-basic" label="Standard" variant="standard"  value={city} onChange={handchange}/>
                <Button variant="contained" type='submit'>Contained</Button>
            </form>

        </div>
    )
}