import React from "react";
import { useState, useEffect } from 'react';

const Countdown = () => {
  // fecha en la que termina el contador 
  const deadline = new Date("Apr 1 2022 19:02:05 GMT-0300");

  const [remainingTime, setRemainingTime] = useState({
    days: "",
    hours: "",
    minutes: ""
  });


  const getRemainingTime = (deadline) => {
    let now = new Date();
    let remainingTime = (new Date(deadline) - now + 1000) / 1000;
    let remainingMinutes = ("0" + Math.floor((remainingTime / 60) % 60)).slice(
      -2
    );
    let remainingHours = ("0" + Math.floor((remainingTime / 3600) % 24)).slice(
      -2
    );
    let remainingDays = Math.floor(remainingTime / (3600 * 24));

    return {
      remainingMinutes,
      remainingHours,
      remainingDays,
    };
  };

  const changeRemainingTime = () => {
    setRemainingTime({
      days: getRemainingTime(deadline).remainingDays,
      hours: getRemainingTime(deadline).remainingHours,
      minutes: getRemainingTime(deadline).remainingMinutes,
    })
  }

  useEffect(() => {

    changeRemainingTime();
    const interval = setInterval(changeRemainingTime, 1000);
    return () => clearInterval(interval)

  }, []);

  return (
    <>
      <h4>¡Te quedan :</h4>
      <div className="d-flex justify-content-center my-4 fs-5 ">
        <div className="d-flex border border-secondary rounded p-4">
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
        </div>
      </div>
      <h4 className="text-end">para participar!</h4>
    </>
  );
};

export default Countdown;