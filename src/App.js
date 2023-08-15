import { useState, useEffect } from "react";
import "./App.css";
import DisplayName from "./components/DisplayName";
import MovieList from "./components/MovieList";
import Speedometer from "./components/Speedometer";
import AxiosExample from "./components/AxiosExample";
import SimpleForm from "./components/SimpleForm";

function App() {
  const name = "true chaudhary";
  // const isOnline = true;

  // const movies = [
  //   {
  //     id: 1,
  //     name: "Captain America",
  //   },
  //   {
  //     id: 2,
  //     name: "Iron Man",
  //   },
  //   {
  //     id: 3,
  //     name: "Black Panther",
  //   },
  //   {
  //     id: 4,
  //     name: "Avenger Endgame",
  //   },
  //   {
  //     id: 5,
  //     name: "Captain Marvel",
  //   },
  // ];

  // function handleClick(e) {
  //   console.log(e.target.innerHTML);
  // }

  // const [isOnline, setIsOnline] = useState(false);

  const paragraphStyle = {
    color: "black",
    backgroundColor: "greenyellow",
  };
  return (
    <div className="App">
      {/* <MovieList movies={movies} onClick={handleClick} /> */}
      {/* {isOnline ? <Speedometer /> : <DisplayName />}
      <button onClick={() => setIsOnline(!isOnline)}>
        is Online is {isOnline.toString()}
      </button> */}
      {/* <h1>Hello React</h1>
      <h2>{name}</h2>
      <h3>{isOnline ? "Online" : "Offline"}</h3>
      <DisplayName />
      <button onClick={handleClick} onMouseEnter={handleClick}>
        Click Me
      </button> */}
      {/* <AxiosExample /> */}
      {/* <SimpleForm /> */}
      {/* <div className="myclass" style={{ backgroundColor: "tomato" }}>
        <h1 style={{ color: "wheat" }}>Hello React</h1>
        <p style={paragraphStyle}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div> */}
      <h1>{process.env.React_APP_MY_VAR}</h1>
    </div>
  );
}

export default App;
