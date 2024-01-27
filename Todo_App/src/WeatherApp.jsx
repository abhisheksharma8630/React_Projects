import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

const WeatherApp = () => {
    let [data,setData] = useState({
        city:"Delhi",
        temp:24.2,
        temp_min:22.1,
        temp_max:26.4,
        humidity:47,
        weather:"haze",
        feels_like:22.3
    });
    function updateInfo(info){
        setData(info);
    }
    return ( 
        <div>
            <h2>Weather App By Abhishek Sharma</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={data}/>
        </div>
     );
}
 
export default WeatherApp;