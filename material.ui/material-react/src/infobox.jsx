import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function Infobox(){



    const IMg_URL ="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let info ={
        city: "Delhi",
        feels_like: 30,
        humidity: 80,
        pressure: 1000,
        temp: 32,
        temp_max: 35,
        temp_min: 28,
        weather: "clear sky",
        windspeed: 5
        
    }


    return(
        <div className="infobox">

            <h1>infobox - {info.temp}</h1><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={IMg_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Temperature: {info.temp}°C,</div>
          <div>Humidity: {info.humidity}%</div>
          <div>Pressure: {info.pressure} hPa</div>
          <div>Wind Speed: {info.windspeed} m/s</div>
        </Typography>
      </CardContent>
      
    </Card>

        </div>
    )
}
