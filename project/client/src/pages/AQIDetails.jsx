// import { useEffect, useState } from "react";

// export default function AQI(){

// const [aqi,setAqi] = useState(null);

// useEffect(()=>{

// fetch("https://api.waqi.info/feed/delhi/?token=demo")
// .then(res=>res.json())
// .then(data=>{
//   setAqi(data.data.aqi)
// })

// },[]);

// return(

// <div className="container">

// <h2 className="page-title">Air Quality Index</h2>

// <div className="dashboard-grid">

// <div className="dashboard-card large">
// <h3>Current AQI</h3>
// <h1 style={{fontSize:"48px"}}>{aqi ?? "Loading..."}</h1>
// </div>

// <div className="dashboard-card large">
// <h3>Status</h3>
// <p>{aqi>150?"Unhealthy":"Moderate"}</p>
// </div>

// <div className="dashboard-card large">
// <h3>Health Tip</h3>
// <p>Avoid outdoor exercise if AQI is high.</p>
// </div>

// </div>

// </div>

// )

// }




import { useEffect, useState } from "react";

export default function AQI() {

  const [aqi, setAqi] = useState(null);

  useEffect(() => {

    fetch(
      "https://api.weatherapi.com/v1/current.json?key=0c1663a490164e318fd95615260605&q=Delhi&aqi=yes"
    )
      .then((res) => res.json())
      .then((data) => {

        // AQI value
        const airQuality = data.current.air_quality;

        // Example using PM2.5
        setAqi(airQuality.pm2_5);

      });

  }, []);

  return (
    <div className="container">

      <h2 className="page-title">🌫 Air Quality Index</h2>

      <div className="dashboard-grid">

        <div className="dashboard-card large">
          <h3>PM 2.5</h3>

          <h1 style={{ fontSize: "48px" }}>
            {aqi ?? "Loading..."}
          </h1>
        </div>

        <div className="dashboard-card large">
          <h3>Status</h3>

          <p>
            {aqi > 100
              ? "Unhealthy"
              : aqi > 50
              ? "Moderate"
              : "Good"}
          </p>
        </div>

        <div className="dashboard-card large">
          <h3>Health Tip</h3>

          <p>
            {aqi > 100
              ? "Avoid outdoor exercise."
              : "Air quality is acceptable."}
          </p>
        </div>

      </div>

    </div>
  );
}