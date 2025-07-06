import "./info.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const URL =
    "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://media.istockphoto.com/id/863513024/photo/winter-scene-snowfall-on-the-blurred-background.jpg?s=612x612&w=0&k=20&c=piIhc2R6dExYQ5X_7CnpPhJk8rCB7itK-PQ0pgsCai4="
    const RAINY_URL = "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.jpg?s=612x612&w=0&k=20&c=2YasxBShNC0YX7a-gwZJuCJRjEepEKTngyiyq3PvTws="
  return (
    <div className="info">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345, minWidth: 320 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>=70 ? RAINY_URL : (info.temp > 25 ? HOT_URL : COLD_URL) }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}  {info.humidity>70 ?<ThunderstormIcon/>:((info.temp > 25 ? <SunnyIcon/> :<AcUnitIcon/>))}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>
                <p>Temperature : {info.temp}&deg;C</p>
                <p>TempMin : {info.tempMin}&deg;C</p>
                <p>TempMax : {info.tempMax}&deg;C</p>
                <p>Humidity : {info.humidity}</p>
                <p>FeelsLike : {info.feelsLike}&deg;C</p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
