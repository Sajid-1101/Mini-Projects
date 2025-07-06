import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
// import "./App.css";
import "./weatherApp.css";
import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import WeatherApp from "./weatherApp";

function App() {

  return (
    <div className="app">
      <WeatherApp/>
    </div>
  );
}

export default App;
