import { useState } from "react";


export const TrafficLight = () => {
  const [color, setColor] = useState("green");
  
  const changeColor = (currentColor) => {
    setColor(currentColor)
  }


  return (
    <div className="container mt-5">
      <div className={`py-3 ${color}`}>
        <h1>
          Traffic Light
        </h1>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        {/* Estructura superior */}
        <div className="hanger"></div>

        {/* Caja del semáforo */}
        <div className="traffic-light bg-dark rounded-3 d-flex flex-column align-items-center p-3">
          <div className={`light red ${color == "red" ? "glow" : ""}`}
            onClick={() => changeColor("red")}>
          </div>
          <div className={`light yellow ${color == "yellow" ? "glow" : ""}`}
            onClick={() => changeColor("yellow")} >
          </div>
          <div className={`light green ${color == "green" ? "glow" : ""}`}
            onClick={() => changeColor("green")}>
          </div>
        </div>
      </div>
    </div>
  )

}