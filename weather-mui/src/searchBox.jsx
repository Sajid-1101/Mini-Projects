import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo }) {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b78c99a5bd6529f8bb4e914a82ca0681";
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();

      console.log(data);

      let result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };
  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let info = await getWeatherInfo();
      setCity("");
      updateInfo(info);
      setError(false);
    } catch (error) {
        setError(true);
    }
  };
  return (
    <div className="searchBox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          onChange={handleChange}
          value={city}
        />{" "}
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button> <br /><br />
        {error && <p style={{color:"red"}}>No Such Place Exists!</p>}
      </form>
    </div>
  );
}
