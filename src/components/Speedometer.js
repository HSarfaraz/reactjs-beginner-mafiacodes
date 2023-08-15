import React, { useState, useEffect } from "react";

const Speedometer = () => {
  const [speed, setSpeed] = useState(20);
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setSpeed(speed + 5);
    console.log(speed);
  }
  const handleCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("Counter state variable has been changed");
  }, [counter]);

  useEffect(() => {
    console.log("speed has changed");
    return () => {
      console.log("speed is cleaned");
    };
  }, [speed]);

  useEffect(() => {
    console.log("Speedometer component mounted");
    return () => {
      console.log("Speedometer component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Speed or counter changed");
  }, [speed, counter]);

  return (
    <div>
      <h1>Speedometer</h1>
      <h2>Speed is : {speed}</h2>
      <button onClick={handleClick}>Increase Speed by 5</button>
      <br />
      <button onClick={handleCounter}>Counter: {counter}</button>
    </div>
  );
};

export default Speedometer;
