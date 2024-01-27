import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';

import './InfoBox.css'
import { Icon } from '@mui/material';

const InfoBox = ({info}) => {
    let hot_url = "https://images.unsplash.com/photo-1615066037299-7fd7fe32686b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bm55JTIwZGF5fGVufDB8fDB8fHww";
    let cold_url = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let rain_url = "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return ( 
        <div>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }} >
              <CardMedia
              sx={{ height: 140 }}
              image={info.humidity > 80 ? rain_url: info.temp>15 ? hot_url:cold_url}
              title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align='left'>{info.city} &nbsp;{info.humidity > 80 ? <ThunderstormOutlinedIcon />: info.temp>15 ? <WbSunnyIcon/>:<AcUnitIcon />}</Typography>
                <Typography variant="body2" color="text.secondary" align='left' component='span'>
                  <p>Temperature = {info.temp}&deg;C</p>
                  <p>Humidity = {info.humidity}</p>
                  <p>Min Temp = {info.temp_min}&deg;C</p>
                  <p>Max Temp = {info.temp_max}&deg;C</p>
                  <p>The weather can be described as {info.weather} and feels like {info.feels_like}&deg;C</p>
                </Typography>
              </CardContent>
            </Card>
            </div>
        </div>
     );
}
 
export default InfoBox;