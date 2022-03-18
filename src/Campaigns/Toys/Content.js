import React from "react";
import { useState, useEffect } from "react";

const Countdown = () => {
  // fecha en la que termina el contador 
  const deadline = new Date("Apr 1 2022 19:02:05 GMT-0300");

  const [remainingTime, setRemainingTime] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });


  const getRemainingTime = (deadline) => {
    let now = new Date();
    let remainingTime = (new Date(deadline) - now + 1000) / 1000;
    let remainingSeconds = ("0" + Math.floor(remainingTime % 60)).slice(-2);
    let remainingMinutes = ("0" + Math.floor((remainingTime / 60) % 60)).slice(
      -2
    );
    let remainingHours = ("0" + Math.floor((remainingTime / 3600) % 24)).slice(
      -2
    );
    let remainingDays = Math.floor(remainingTime / (3600 * 24));

    return {
      remainingSeconds,
      remainingMinutes,
      remainingHours,
      remainingDays,
    };
  };

  const changeRemainingTime = () =>{
    setRemainingTime({
      days: getRemainingTime(deadline).remainingDays,
      hours: getRemainingTime(deadline).remainingHours,
      minutes: getRemainingTime(deadline).remainingMinutes,
      seconds: getRemainingTime(deadline).remainingSeconds,
    })
  }

  useEffect(() => {
    
    changeRemainingTime();
    const interval = setInterval(changeRemainingTime, 1000);
    return () => clearInterval(interval)

  }, []);

  return (
    <>
      <div className="d-flex ">
        <div className="text-center">
          <div className="mx-2">{remainingTime.days}</div>
          <div className="mx-2">DIAS</div>
        </div>
        <div className="text-center">
          <div className="mx-2">{remainingTime.hours}</div>
          <div className="mx-2">HORAS</div>
        </div>
        <div className="text-center">
          <div className="mx-2">{remainingTime.minutes}</div>
          <div className="mx-2">MINUTOS</div>
        </div>
        <div className="text-center">
          <div className="mx-2">{remainingTime.seconds}</div>
          <div className="mx-2">SEGUNDOS</div>
        </div>
      </div>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div>
        <p>¡Te quedan :</p>
        <Countdown />
        <span>para participar!</span>
      </div>
    </>
  );
};

export default Content;
