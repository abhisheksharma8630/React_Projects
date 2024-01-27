import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

import "./SearchBox.css"

const SearchBox = ({updateInfo}) => {
    let API_URL = `https://api.openweathermap.org/data/2.5/weather`
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    async function getWeatherInfo(){
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${import.meta.env.VITE_REACT_API_KEY}&units=metric`);
            let jsonRes = await response.json();
            let result = {
                city:jsonRes.name,
                temp:jsonRes.main.temp,
                temp_min:jsonRes.main.temp_min,
                temp_max:jsonRes.main.temp_max,
                weather:jsonRes.weather[0].description,
                humidity:jsonRes.main.humidity,
                feels_like:jsonRes.main.feels_like,
            }
            return result;
        }catch(err){
            throw err;
        }
    }

    function handleInput(event){
        setCity(event.target.value);
    }

    async function handleSubmit(event){
        try{
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        }catch(err){
            setError(true);
        }
    }
    return ( 
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div id="search-box">
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleInput} size='small'/>
                <Button variant='contained' type='submit'>Submit</Button>
                </div>
                {error && <p>No such place EXIST !!!</p>}
            </form>
        </div>
     );
}
 
export default SearchBox;